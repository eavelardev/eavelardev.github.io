#include "prototype.hpp"

int main()
{
    Vehicle* veh1 = new Car("sedan", "white");
    Vehicle* veh2 = veh1 -> clone();
    Vehicle* veh3 = new Truck("large", "black");
    Vehicle* veh4 = veh3 -> clone();

    delete veh1;
    delete veh2;
    delete veh3;
    delete veh4;

    return 0;
}
