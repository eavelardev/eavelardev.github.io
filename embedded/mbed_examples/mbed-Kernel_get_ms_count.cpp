#include "mbed.h"

using namespace std::chrono;

int main()
{
    // 64-bit time doesn't wrap for half a billion years, at least
    Kernel::Clock::time_point now = Kernel::Clock::now();

    // wait a while
    ThisThread::sleep_for(10ms);

    Kernel::Clock::time_point later = Kernel::Clock::now();

    //calculate millisecs elapsed
    Kernel::Clock::duration elapsed = later.time_since_epoch() - now.time_since_epoch();
    uint32_t elapsed_ms = duration_cast<milliseconds>(elapsed).count();

    printf("Elapsed ms: %lu \r\n", elapsed_ms);
}
