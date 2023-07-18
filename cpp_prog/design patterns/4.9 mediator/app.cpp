/***************************************************************
 * The Application to test the Mediator Pattern *
 ***************************************************************/
#include "mediator.hpp"

int main()
{
    Mediator mediator;                       // Instantiation of the Mediator object
    mediator.sendMessage("Hello everyone!"); // Broadcasting

    return 0;
}
