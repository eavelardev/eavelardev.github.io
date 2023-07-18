#ifndef MEMENTO_H
#define MEMENTO_H

#include <iostream>
#include <string>

using namespace std;

class Memento; // Forward Declaration

// Definition of Originator class
class Originator
{
    private:
        string state;
        Memento *memento;
    public:
        Originator();
        ~Originator();
        string getState() const;
        void setState(string state);
        void restoreState();
};

// Definition of Memento class
class Memento
{
    private:
        string state;
    public:
        string getState() const;
        void setState(string state);
};

#endif