#include "stm32f4xx.h"

int main(void)
{
   RCC->AHB1ENR |= RCC_AHB1ENR_GPIOCEN;   // enable the clock to GPIO
   GPIOC->MODER |= GPIO_MODER_MODER13_0;  // set pin to be general purpose output
   
   while(1) {
      GPIOC->ODR ^= GPIO_ODR_OD13;                 // toggle led
      for (int i=0; i<1000000;i++) __asm("nop");   // delay
   }

   return 0;
}
