#ifndef SINGLETON_HPP
#define SINGLETON_HPP

#include <iostream>
#include <string>

using namespace std;

class President
{
    private:
        string name;
        static President* ptr; // static to return the pointer
        President (string name);
    public:
        static President* create(string name); // Static creator function
        string getName() const;
};

#endif