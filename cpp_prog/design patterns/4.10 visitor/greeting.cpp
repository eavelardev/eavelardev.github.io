/***************************************************************
* The implementation file for Greeting Class *
***************************************************************/
#include "greeting.hpp"

// Definition of the only member function in Greeting class
void Greeting :: accept (Visitor* v)
{
    v -> visit();
}