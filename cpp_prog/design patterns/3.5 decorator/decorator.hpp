#ifndef DECORATOR_H
#define DECORATOR_H

#include <string>
#include <iostream>

using namespace std;

// Declaration of Component class
class Component
{
    private:
        string text;
    public:
        Component(string text);
        void draw();
};

// Declaration of Decorator class
class Decorator
{
    private:
        Component component;
    public:
        Decorator(Component component);
        void draw();
};

#endif