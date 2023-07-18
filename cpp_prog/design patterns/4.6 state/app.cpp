/***************************************************************
 * The application file to test the State Pattern *
 ***************************************************************/
#include "state.hpp"

int main()
{
    // Instantiation of the Light object and an OffSet object (original state)
    Light *light = new Light;
    State *state = new OffState;
    light -> setState(state);

    // Calling the turnSwitch three times to change the state of the light
    light -> turnSwitch();
    light -> turnSwitch();
    light -> turnSwitch();
    
    // Deleting the last state object and the light object
    delete state;
    delete light;

    return 0;
}