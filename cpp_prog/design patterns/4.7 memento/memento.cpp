/***************************************************************
 * The implementation file for Memento Pattern *
 ***************************************************************/
#include "memento.hpp"

// constructor of Originator class encapsulating pointer to Memento object
Originator ::Originator()
{
    memento = new Memento;
}

// destructor of Originator to delete Memento object avoiding memory leak
Originator ::~Originator()
{
    delete memento;
}

// getState member function
string Originator ::getState() const
{
    return state;
}

// setState member function (stores a copy in Memento object before setting)
void Originator ::setState(string st)
{
    memento->setState(state);
    state = st;
}

// restore member function
void Originator ::restoreState()
{
    state = memento->getState();
}

// getState member function of Memento object used by Originator object
string Memento ::getState() const
{
    return state;
}

// setState member function of Memento object used by the Originator object
void Memento ::setState(string st)
{
    state = st;
}