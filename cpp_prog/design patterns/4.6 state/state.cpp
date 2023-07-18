/***************************************************************
 * The implementation for the simple case of the State Pattern *
 ***************************************************************/
#include "state.hpp"

// Definition setState
void Light ::setState(State *st)
{
    state = st;
}

// Definition deleteState
void Light ::deleteState()
{
    delete state;
}

// Definition of turnSwitch (this defines the Light object)
void Light ::turnSwitch()
{
    state->handle(this);
}

// Definition handle in OffState class
void OffState ::handle(Light *light)
{
    cout << "Light turned on" << endl;
    light->deleteState();
    light->setState(new OnState);
}

// Definition handle in OnState class
void OnState ::handle(Light *light)
{
    cout << "Light turned off" << endl;
    light->deleteState();
    light->setState(new OffState);
}