/***************************************************************
 * The interface file for Greeting Class *
 ***************************************************************/
#ifndef GREETING_HPP
#define GREETING_HPP

#include <iostream>
#include <string>
#include "visitor.hpp"

using namespace std;

class Visitor; // Forward declaration

// Definition of Greeting class
class Greeting
{
    public:
        void accept(Visitor *);
};

#endif