#ifndef BUILDER_HPP
#define BUILDER_HPP

#include <iostream>

using namespace std;

// Abstract class acting as a superclass for all Packages
class Vacation
{
    public:
        virtual void bookHotels() = 0;
        virtual void bookFlights() = 0;
        virtual void bookTours() = 0;
};

class Package1: public Vacation
{
    public:
        void bookHotels();
        void bookFlights();
        void bookTours();
};

class Package2: public Vacation
{
    public:
        void bookHotels();
        void bookFlights();
        void bookTours();
};

class Package3: public Vacation
{
    public:
        void bookHotels();
        void bookFlights();
        void bookTours();
};

class Director
{
    private:
        static Vacation* vacation;
    public:
        static void book (int type); // client calls only this function
};
#endif