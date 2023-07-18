#ifndef COMMAND_HPP
#define COMMAND_HPP
#include <string>
#include <iostream>

using namespace std;

// This class defines the estate that receives the result of the command
class Receiver
{
    public:
        void action();
};

// The abstract class
class Command
{
    public:
        virtual void execute() = 0;
};

// The concrete class representing the actual command
class ConcreteCommand : public Command
{
    private:
        Receiver *receiver;
    public:
        ConcreteCommand(Receiver *receiver);
        void execute();
};

// The invoker class that when the time comes calls the command
class Invoker
{
    private:
        Command *command;
    public:
        void storeCommand(Command *command);
};

#endif