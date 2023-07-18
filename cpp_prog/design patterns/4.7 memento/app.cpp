/***************************************************************
 * The application file to test Memento Pattern *
 ***************************************************************/
#include "memento.hpp"

int main()
{
    Originator originator;

    originator.setState("Hello");          // first state changes
    cout << originator.getState() << endl; // get the first state
    
    originator.setState("Hi");             // second state changes
    cout << originator.getState() << endl; // get the second state
    
    originator.restoreState();             // first state is restored
    cout << originator.getState() << endl; // get the restored state
    
    return 0;
}
