#include "template.hpp"

int main()
{
    // Instantiation of EnglishMeeting class
    cout << "English meeting: " << endl;
    EnglishMeeting engMt;
    engMt.meeting();
    cout << endl;

    // Instantiation of FrenchMeeting class
    cout << "French meeting: " << endl;
    FrenchMeeting freMt;
    freMt.meeting();
    cout << endl;

    return 0;
}