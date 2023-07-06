#include "nrf_gpio.h"
#include "cmsis_os.h"

#define GPIO_OUTPUT 13

void delay(unsigned int count)
{
    for (unsigned int i = 0; i < count; i++)
        __asm("nop");
}

__NO_RETURN void led_thread1(void *argument) 
{
    unsigned int cycles = 3000000;

    while(1) {
        nrf_gpio_pin_toggle(GPIO_OUTPUT);
        delay(cycles);
    }
}

static const osThreadAttr_t osThreadAttr_LED = {
    .name = "LED_Thread",
    .priority = osPriorityNormal
};

int main(void)
{
    nrf_gpio_cfg_output(GPIO_OUTPUT);

    osKernelInitialize();
    osThreadNew(led_thread1, NULL, &osThreadAttr_LED);
    osKernelStart();

    while(1);
}
