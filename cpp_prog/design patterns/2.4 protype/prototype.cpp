#include "prototype.hpp"

Car::Car(string m, string c)
:model(m), color(c)
{
    cout << "A " << color << " " << model << " car was made." << endl;
}

Car::Car(const Car& car)
:model(car.model), color(car.color)
{
    cout << "A " << color << " " << model << " car was made." << endl;
}

Car* Car::clone() const
{
    return new Car(*this);
}

Truck::Truck(string s, string c)
:size(s), color(c)
{
    cout << "A " << color << " " << size << " truck was made." << endl;
}

Truck::Truck(const Truck& truck)
:size(truck.size), color(truck.color)
{
    cout << "A " << color << " " << size << " truck was made." << endl;
}

Truck* Truck::clone() const
{
    return new Truck(*this);
}