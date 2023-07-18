#ifndef OBSERVER_HPP
#define OBSERVER_HPP

#include <string>
#include <iostream>
#include <set>

using namespace std;

class Observer; // Forward Declaration

// Class Subject (Seller)
class Subject
{
    private:
        set<Observer *> observers;
    public:
        void subscribe(Observer *observer);
        void unsubscribe(Observer *observer);
        void notify(int price);
};

// The abstract class
class Observer
{
    public:
        virtual void update(int price) = 0;
        virtual ~Observer() {}
};

// Concrete class Observer1 (buyer1)
class Observer1 : public Observer
{
    private:
        Subject *subject;
    public:
        Observer1(Subject *subject);
        void update(int price);
};

// Concrete class Observer2 (buyer2)
class Observer2 : public Observer
{
    private:
        Subject *subject;
    public:
        Observer2(Subject *subject);
        void update(int price);
};

#endif