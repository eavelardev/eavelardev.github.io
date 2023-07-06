#include "mbed.h"

typedef struct {
    float    voltage;   /* AD result of measured voltage */
    float    current;   /* AD result of measured current */
    uint32_t counter;   /* A counter value               */
} message_t;

MemoryPool<message_t, 16> mpool;
Queue<message_t, 16> queue;
Thread thread;

/* Send Thread */
void send_thread(void)
{
    uint32_t i = 0;
    while (true) {
        i++; // fake data update
        message_t *message = mpool.try_alloc();
        message->voltage = (i * 0.1) * 33;
        message->current = (i * 0.1) * 11;
        message->counter = i;
        queue.try_put(message);
        ThisThread::sleep_for(1s);
    }
}

int main(void)
{
    thread.start(callback(send_thread));

    while (true) {
        message_t *message;

        if (queue.try_get(&message)) {
            printf("\nVoltage: %.2f V\n\r", message->voltage);
            printf("Current: %.2f A\n\r", message->current);
            printf("Number of cycles: %lu\n\r", message->counter);

            mpool.free(message);
        }
    }
}
