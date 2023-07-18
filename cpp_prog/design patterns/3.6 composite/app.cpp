#include "composite.hpp"

int main ( )
{
    // Creating and showing a point object (leaf)
    cout << "Creating and showing a point" << endl;
    Point point (7.77, 2.24);
    point.show();
    cout << endl;

    // Creating and showing a multipoint object (composite)
    cout << "Creating and showing a multipoint figure" << endl;
    Multipoint multipoint;
    multipoint.addPoint(new Point (3.22, 4.51));
    multipoint.addPoint(new Point (4.12, 8.32));
    multipoint.addPoint(new Point (1.12, 7.44));
    multipoint.show();
    cout << endl;
    
    return 0;
}
