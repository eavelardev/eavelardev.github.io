/***************************************************************
 * The implementation file to simulate the Observer Pattern *
 ***************************************************************/
#include "observer.hpp"

// Subscribe function in Subject
void Subject ::subscribe(Observer *observer)
{
    observers.insert(observer);
}

// Unsubscribe function in Subject
void Subject ::unsubscribe(Observer *observer)
{
    observers.erase(observer);
}

// Notify function used by object to notify observers
void Subject ::notify(int price)
{
    set<Observer *>::iterator iter;
    for (iter = observers.begin(); iter != observers.end(); iter++)
    {
        (*iter)->update(price);
    }
}

// Constructor for Observer1
Observer1 ::Observer1(Subject *sj)
    : subject(sj)
{
}

// Update function for Observer1
void Observer1 ::update(int price)
{
    cout << "Observer1: Price is now " << price << ", I will buy." << endl;
}

// Constructor for Observer2
Observer2 ::Observer2(Subject *sj)
    : subject(sj)
{
}

// Update function for Observer2
void Observer2 ::update(int price)
{
    cout << "Observer2: Price is now " << price << ", I will buy." << endl;
}