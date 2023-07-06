#include "mbed.h"

int main()
{
    // creates a queue with the default size
    EventQueue queue;

    // events are simple callbacks
    queue.call(printf, "called immediately\n");
    queue.call_in(2s, printf, "called in 2 seconds\n");
    queue.call_every(1s, printf, "called every 1 seconds\n");

    // events are executed by the dispatch method
    queue.dispatch_forever();
}
