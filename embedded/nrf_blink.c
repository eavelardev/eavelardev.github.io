#include "nrf_gpio.h"

#define GPIO_OUTPUT_0 13

void delay(unsigned int count)
{
    for (unsigned int i = 0; i < count; i++)
        __asm("nop");
}

int main(void)
{
    nrf_gpio_cfg_output(GPIO_OUTPUT_0);

    while(1)
    {
        nrf_gpio_pin_toggle(GPIO_OUTPUT_0);
        delay(3000000);
    }
}
