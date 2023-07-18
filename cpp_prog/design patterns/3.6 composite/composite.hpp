/***************************************************************
 * The interface of classes Figure, Point, and Multipoint *
 ***************************************************************/
#ifndef COMPOSITE_H
#define COMPOSITE_H

#include <iostream>
#include <utility>
#include <vector>

using namespace std;

// Interface of Figure class
class Figure
{
public:
    virtual void show() = 0;
};

// Interface of Point class
class Point : public Figure
{
private:
    pair<double, double> point;

public:
    Point(double x, double y);
    void show();
};

// Interface of Multipoint class
class Multipoint : public Figure
{
private:
    int size;
    vector<Figure *> points;

public:
    Multipoint();
    void addPoint(Figure *point);
    void show();
};

#endif