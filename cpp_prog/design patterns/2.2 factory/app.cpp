#include "factory.hpp"

int main()
{
    Shape *shape;

    shape = Shape::factory("square");
    shape->draw();

    shape = Shape::factory("circle");
    shape->draw();

    return 0;
}
