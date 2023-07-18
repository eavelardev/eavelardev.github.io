#ifndef MEETING_H
#define MEETING_H

#include <iostream>

using namespace std;

// Interface of Meeting base class
class Meeting
{
public:
    void meeting();
    virtual void greeting() = 0;
    virtual void farewell() = 0;
};

// Interface of EnglishMeeting subclass
class EnglishMeeting : public Meeting
{
public:
    void greeting();
    void farewell();
};

// Interface of FrenchMeeting subclass
class FrenchMeeting : public Meeting
{
public:
    void greeting();
    void farewell();
};

#endif