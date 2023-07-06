#include "mbed.h"

PlatformMutex stdio_mutex;
Thread t2;
Thread t3;

void notify(const char *name, int state)
{
    stdio_mutex.lock();
    printf("%s: %d\n\r", name, state);
    stdio_mutex.unlock();
}

void test_thread(void const *args)
{
    while (true) {
        notify((const char *)args, 0);
        ThisThread::sleep_for(1s);
        notify((const char *)args, 1);
        ThisThread::sleep_for(1s);
    }
}

int main()
{
    t2.start(callback(test_thread, (void *)"Th 2"));
    t3.start(callback(test_thread, (void *)"Th 3"));

    test_thread((void *)"Th 1");
}
