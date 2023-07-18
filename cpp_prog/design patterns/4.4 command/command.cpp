#include "command.hpp"

// Implementation of action function
void Receiver ::action()
{
    cout << "The will has been executed." << endl;
}

// Constructor of the concrete command class
ConcreteCommand ::ConcreteCommand(Receiver *recv)
    : receiver(recv)
{
}

// Implementation of execute function
void ConcreteCommand ::execute()
{
    receiver->action();
}

// Implementation of storeCommand
void Invoker ::storeCommand(Command *cmnd)
{
    command = cmnd;
    bool rightTime = false;
    while (!rightTime)
    {
        cout << "Enter 1 if it is right time; enter 0 otherwise: ";
        cin >> rightTime;
        if (rightTime)
        {
            command->execute();
        }
    }
}