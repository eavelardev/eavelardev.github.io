#include "composite.hpp"

// Implementation of constructor of Point class
Point ::Point(double x, double y)
{
    point.first = x;
    point.second = y;
}

// Implementation of show function in the Point class
void Point ::show()
{
    cout << "(" << point.first << " , " << point.second << ")" << endl;
}

// Implementation of Multipoint constructor
Multipoint ::Multipoint()
{
    size = 0;
}

// Implementation of addPoint function in Multipoint class
void Multipoint ::addPoint(Figure *point)
{
    points.push_back(point);
    size++;
}

// Implementation of show function in Multipoint class
void Multipoint ::show()
{
    for (int i = 0; i < size; i++)
    {
        points[i] -> show();
    }
}