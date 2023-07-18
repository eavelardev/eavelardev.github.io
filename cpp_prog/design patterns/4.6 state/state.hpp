/***************************************************************
 * The interface file for a simple case of the State Pattern *
 ***************************************************************/
#ifndef STATE_HPP
#define STATE_HPP

#include <iostream>

using namespace std;

class State; // Forward Declaration

// Definition of the Light Class (Context class in State Pattern)
class Light
{
    private:
        State *state;
    public:
        void setState(State *state);
        void deleteState();
        void turnSwitch();
};

// Definition of the abstract State class
class State
{
    public:
        virtual void handle(Light *light) = 0;
};

// Definition of concrete class OffState
class OffState : public State
{
    public:
        void handle(Light *light);
};

// Definition of concrete class OnState
class OnState : public State
{
    public:
        void handle(Light *light);
};

#endif