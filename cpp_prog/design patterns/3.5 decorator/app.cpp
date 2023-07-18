#include "decorator.hpp"

int main()
{
    // Creating a short text and wraping it with asterisks.
    Decorator decor1(Component("Hello!"));
    decor1.draw();

    // Creating another text and wraping it with asterisks.
    Decorator decor2(Component("Hello dear!"));
    decor2.draw();
    
    // Creating another longer text and wraping it with asterisks.
    Decorator decor3(Component("Hi friends!"));
    decor3.draw();

    return 0;
}
