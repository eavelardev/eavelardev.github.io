/***************************************************************
* The application file to test the Visitor Pattern *
***************************************************************/
#include "greeting.hpp"

int main()
{
    // Instantiation of Greeting class
    Greeting greeting;

    // Using EnglishVisitor class
    Visitor* visitor1 = new EnglishVisitor;
    greeting.accept (visitor1);

    // Using FrenchVisitor class
    Visitor* visitor2 = new FrenchVisitor;
    greeting.accept (visitor2);

    // Using SpanishVisitor class
    Visitor* visitor3 = new SpanishVisitor;
    greeting.accept (visitor3);

    return 0;
}
