#include "facade.hpp"

int main()
{
    House house(1000); // Creation of a House (facade) object
    house.draw();      // Calling the draw member
    return 0;
}
