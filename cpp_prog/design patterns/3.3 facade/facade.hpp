#ifndef FACADE_H
#define FACADE_H

#include <string>
#include <iostream>
using namespace std;

// The class LivingRoom
class LivingRoom
{
private:
    double size;

public:
    LivingRoom(double size);
    void draw();
};

// The class BedRoom
class BedRoom
{
private:
    double size;

public:
    BedRoom(double size);
    void draw();
};

// The class Kitchen
class Kitchen
{
private:
    double size;

public:
    Kitchen(double size);
    void draw();
};

// The class BathRoom
class BathRoom
{
private:
    double size;

public:
    BathRoom(double size);
    void draw();
};

// The class House (facade)
class House
{
private:
    double size;

public:
    House(double size);
    void draw();
};
#endif