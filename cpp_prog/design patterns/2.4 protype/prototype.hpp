#ifndef PROTOTYPE_HPP
#define PROTOTYPE_HPP

#include <string>
#include <iostream>

using namespace std;

// Abstract class
class Vehicle
{
    public:
        virtual Vehicle* clone() const = 0;
        virtual ~Vehicle(){};
};

// Concrete class
class Car : public Vehicle
{
    private:
        string model;
        string color;
        Car(const Car& car);
    public:
        Car(string model, string color);
        Car* clone() const;
};

// Concrete class
class Truck : public Vehicle
{
    private:
        string size;
        string color;
    public:
        Truck(string size, string color);
        Truck(const Truck& truck);
        Truck* clone() const;
};
#endif
