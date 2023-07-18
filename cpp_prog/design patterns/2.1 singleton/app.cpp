#include "singleton.hpp"

int main()
{
    President* ptr;

    ptr = President::create("Mary");
    cout << "The president name is: " << ptr->getName() << endl;

    ptr = President::create("John");
    cout << "The president name is: " << ptr->getName() << endl;

    return 0;
}
