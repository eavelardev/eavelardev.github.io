#include "template.hpp"

// Implementation of the template method
void Meeting ::meeting()
{
    greeting();
    farewell();
}

// Implementation of the greeting() in EnglishMeeting class
void EnglishMeeting ::greeting()
{
    cout << "Hello my friends!" << endl;
}

// Implementation of the farewell() in EnglishMeeting class
void EnglishMeeting ::farewell()
{
    cout << "Bye my friends!" << endl;
}

// Implementation of the greeting() in FrenchMeeting class
void FrenchMeeting ::greeting()
{
    cout << "Bonjour mes amis" << endl;
}

// Implementation of the farewell() in FrenchMeeting class
void FrenchMeeting ::farewell()
{
    cout << "Au revoir mes amis" << endl;
}