#include "decorator.hpp"

// Implementation of Component constructor
Component ::Component(string tx)
: text(tx)
{
}

// Implementation Component :: draw()
void Component ::draw()
{
    cout << text << endl;
}

// Implementation of Decorator constructor
Decorator ::Decorator(Component comp)
: component(comp)
{
}

// Implementation Decorator :: draw()
void Decorator ::draw()
{
    cout << "*************" << endl;
    component.draw();
    cout << "*************" << endl;
}