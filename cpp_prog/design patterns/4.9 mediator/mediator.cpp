/***************************************************************
 * The implementation for the Mediator Pattern *
 ***************************************************************/
#include "mediator.hpp"

// Implementation of getMessage for Employee1
void Employee1 ::getMessage(string message)
{
    cout << "Employee1 received this message: " << message << endl;
}

// Implementation of getMessage for Employee2
void Employee2 ::getMessage(string message)
{
    cout << "Employee2 received this message: " << message << endl;
}

// Implementation of getMessage for Employee3
void Employee3 ::getMessage(string message)
{
    cout << "Employee3 received this message: " << message << endl;
}
// Implementation of getMessage for Employee4
void Employee4 ::getMessage(string message)
{
    cout << "Employee4 received this message: " << message << endl;
}

// Constructor of the Mediator class
Mediator ::Mediator()
{
    employees.push_back(new Employee1());
    employees.push_back(new Employee2());
    employees.push_back(new Employee3());
    employees.push_back(new Employee4());
}

// Destructor of the Mediator class
Mediator ::~Mediator()
{
    for (int i = 0; i < employees.size(); i++)
    {
        delete employees[i];
    }
}

// Broadcasting the message using sendMessage function
void Mediator ::sendMessage(string message)
{
    for (int i = 0; i < employees.size(); i++)
    {
        employees[i] -> getMessage(message);
    }
}