#include "factory.hpp"

Shape* Shape::factory(string type)
{
    if (type == "square")
    {
        return Square::factory();
    }
    else if (type == "circle")
    {
        return Circle::factory();
    }
    else
    {
        cout << "Cannot create a shape of given type";
        assert(false);
    }
}

Shape::~Shape()
{
}

// Square shape
Square::Square()
{
}

Shape* Square::factory()
{
    return new Square();
}

void Square::draw()
{
    cout << "A square was drawn" << endl;
}

// Circle shape
Circle::Circle()
{
}

Shape* Circle::factory()
{
    return new Circle();
}

void Circle::draw()
{
    cout << "A circle was drawn" << endl;
}
