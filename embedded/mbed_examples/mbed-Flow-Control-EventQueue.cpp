#include "mbed.h"

DigitalOut led1(LED1);
DigitalOut led2(LED2);
EventQueue queue;

void flip(DigitalOut &led)
{
    led = !led;
}

int main()
{
    // events are simple callbacks
    queue.call_every(1s, flip, led1);
    queue.call_every(500ms, flip, led2);

    // events are executed by the dispatch method
    queue.dispatch_forever();
}
