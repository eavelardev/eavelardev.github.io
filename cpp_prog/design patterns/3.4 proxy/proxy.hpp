#ifndef PROXY_H
#define PROXY_H

#include <string>
#include <iostream>
using namespace std;

// Declaration of Subject class (abstract)
class Subject
{
public:
    virtual void draw(int x, int y) = 0;
    virtual void erase() = 0;
    virtual ~Subject() {}
};

// Declaration of Real class
class Real : public Subject
{
public:
    void draw(int x, int y);
    void erase();
};

// Declaration of Proxy class
class Proxy : public Subject
{
private:
    Subject *real;
public:
    Proxy();
    ~Proxy();
    void draw(int x, int y);
    void erase();
};

#endif
