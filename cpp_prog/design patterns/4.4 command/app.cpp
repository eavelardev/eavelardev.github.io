#include "command.hpp"

int main()
{
    // Instantiation of Receiver object
    Receiver *receiver;

    // Instantiation of Command object
    Command *command = new ConcreteCommand(receiver);

    // Instantiation of Invoker object and calling its only function
    Invoker invoker;
    invoker.storeCommand(command);

    // Delete pointers
    // delete receiver;
    delete command;

    return 0;
}