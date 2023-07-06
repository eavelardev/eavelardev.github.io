#include "mbed.h"

#define SW1 P1_11

InterruptIn sw(SW1);
DigitalOut led(LED1);
EventQueue queue(32 * EVENTS_EVENT_SIZE);
Thread thread;

void rise_handler_user_context(void) {
    printf("rise_handler_user_context in context %p\r\n", ThisThread::get_id());
}

void rise_handler(void)
{
    // Execute the time critical part first
    led = !led;
    
    // The rest can execute later in user context (and can contain code that's not interrupt safe).
    // We use the 'queue.call' function to add an event (the call to 'rise_handler_user_context') to the queue.
    queue.call(rise_handler_user_context);
}

void fall_handler()
{
    printf("fall_handler in context %p\n", ThisThread::get_id());
    led = !led;
}

int main(void)
{
    thread.start(callback(&queue, &EventQueue::dispatch_forever));
    printf("Starting in context %p\r\n", ThisThread::get_id());

    // The 'rise' handler will execute in IRQ context
    sw.rise(rise_handler);

    // The 'fall' handler will execute in the context of thread 't'
    sw.fall(queue.event(fall_handler));
}
