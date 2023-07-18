/***************************************************************
 * The implementation file for Visitor Class *
 ***************************************************************/
#include "visitor.hpp"

// Definition of visit() in EnglishVisitor class
void EnglishVisitor ::visit()
{
    cout << "Good Morning." << endl;
}

// Definition of visit() in FrenchVisitor class
void FrenchVisitor ::visit()
{
    cout << "Bon Jour." << endl;
}

// Definition of visit() in SpanishVisitor class
void SpanishVisitor ::visit()
{
    cout << "Buenos Dias." << endl;
}
