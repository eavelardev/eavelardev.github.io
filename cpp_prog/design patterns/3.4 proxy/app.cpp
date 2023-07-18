#include <iostream>
#include "proxy.hpp"

using namespace std;

int main()
{
    Proxy p;

    for (int i = 0; i < 5; i++)
    {
        p.draw(i, i);
        p.erase();
    }

    return 0;
}
