#include "builder.hpp"

// static data member
Vacation* Director::vacation = 0;

void Director::book(int packageType)
{
    if (packageType == 1)
    {
        vacation = new Package1();
    }
    else if (packageType == 2)
    {
        vacation = new Package2();
    }
    else if (packageType == 3)
    {
        vacation = new Package3();
    }

    cout << "This is information about your vacation:" << endl;
    vacation->bookHotels();
    vacation->bookFlights();
    vacation->bookTours();
    cout << endl;
}

// Package 1
void Package1::bookHotels()
{
    cout << "Hotels are booked." << endl;
}

void Package1::bookFlights()
{
    cout << "Flights are booked." << endl;
}

void Package1::bookTours()
{
}

// Package 2
void Package2::bookHotels()
{
    cout << "Hotels are booked." << endl;
}

void Package2::bookFlights()
{
}

void Package2::bookTours()
{
    cout << "Tours are booked." << endl;
}

// Package 3
void Package3::bookHotels()
{
    cout << "Hotels are booked." << endl;
}

void Package3::bookFlights()
{
    cout << "Flights are booked." << endl;
}

void Package3::bookTours()
{
    cout << "Tours are booked." << endl;
}