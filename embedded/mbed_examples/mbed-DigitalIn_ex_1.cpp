#include "mbed.h"

#define SW1 P1_11

DigitalIn sw(SW1);
DigitalOut led(LED1);

int main(void)
{
    sw.mode(PullDown);
    
    while (1) {
        printf("mypin has value : %d \n\r", sw.read());
        led = !led;
        ThisThread::sleep_for(250ms);
    }
}
