#include "mbed.h"

Thread thread;
DigitalOut led(LED1);

void led_thread()
{
    while (true) {
        // Signal flags that are reported as event are automatically cleared.
        ThisThread::flags_wait_any(0x1);
        led = !led;
    }
}

int main()
{
    thread.start(callback(led_thread));

    while (true) {
        ThisThread::sleep_for(1s);
        thread.flags_set(0x1);
    }
}
