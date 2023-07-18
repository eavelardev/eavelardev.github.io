#ifndef FACTORY_HPP
#define FACTORY_HPP

#include <string>
#include <iostream>
#include <cassert>

using namespace std;

class Shape
{
    public:
        static Shape* factory(string);
        virtual void draw () = 0;
        virtual ~Shape();
};

class Square:public Shape
{
    private:
        Square();
    public:
        static Shape* factory();
        void draw();
};

class Circle:public Shape
{
    private:
        Circle();
    public:
        static Shape* factory();
        void draw();
};

#endif