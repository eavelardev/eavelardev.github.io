#include "proxy.hpp"

// Draw function in the Real class
void Real ::draw(int x, int y)
{
    cout << "An object was drawn at " << x << ", " << y << endl;
}

// Erase function in the Real class
void Real ::erase()
{
    cout << "The object erased." << endl;
}

// Constructor of the Proxy class
Proxy ::Proxy()
{
    real = 0;
}

// Destructor of the Proxy class
Proxy ::~Proxy()
{
    delete real;
}

// Draw function in Proxy class
void Proxy ::draw(int x, int y)
{
    if (!real)
    {
        real = new Real;
    }
    real->draw(x, y);
}

// Erase function in Proxy class
void Proxy ::erase()
{
    real->erase();
}