#include "facade.hpp"

// Constructor of LivingRoom
LivingRoom ::LivingRoom(double s)
    : size(s)
{
}

// LivingRoom’s draw
void LivingRoom ::draw()
{
    cout << " A living room of size " << size;
    cout << " square feet was drawn." << endl;
}
// Constructor of BedRoom
BedRoom ::BedRoom(double s)
    : size(s)
{
}

// BedRoom’s draw
void BedRoom ::draw()
{
    cout << " A bedroom of size " << size;
    cout << " square feet was drawn." << endl;
}

// Constructor of Kitchen
Kitchen ::Kitchen(double s)
    : size(s)
{
}

// Kitchen’s draw
void Kitchen ::draw()
{
    cout << " A kitchen of size " << size;
    cout << " square feet was drawn." << endl;
}

// Constructor of BathRoom
BathRoom ::BathRoom(double s)
    : size(s)
{
}

// BathRoom’s draw
void BathRoom ::draw()
{
    cout << " A bathroom of size " << size;
    cout << " square feet was drawn." << endl;
}

// Constructor of House (facade)
House ::House(double s)
    : size(s)
{
}

// House’s draw (part of facade)
void House ::draw()
{
    LivingRoom livingRm(size * 0.35);
    livingRm.draw();

    BedRoom bedRm(size * 0.35);
    bedRm.draw();

    Kitchen kitchen(size * 0.15);
    kitchen.draw();
    
    BathRoom BathRm(size * 0.15);
    BathRm.draw();
}