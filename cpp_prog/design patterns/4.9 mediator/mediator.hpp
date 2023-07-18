/***************************************************************
 * The interface for the Mediator Pattern *
 ***************************************************************/
#ifndef MEDIATOR_H
#define MEDIATOR_H

#include <iostream>
#include <string>
#include <vector>

using namespace std;

// The abstract class Employee with only one virtual function
class Employee
{
    public:
        virtual void getMessage(string message) = 0;
};

// The concrete class Employee1
class Employee1 : public Employee
{
    public:
        void getMessage(string message);
};

// The concrete class Employee2
class Employee2 : public Employee
{
    public:
        void getMessage(string message);
};

// The concrete class Employee3
class Employee3 : public Employee
{
    public:
        void getMessage(string message);
};

// The concrete class Employee4
class Employee4 : public Employee
{
    public:
        void getMessage(string message);
};

// The Mediator class encapsulating a vector of employee objects
class Mediator
{
    private:
        vector<Employee *> employees;
    public:
        Mediator();
        ~Mediator();
        void sendMessage(string message);
};

#endif