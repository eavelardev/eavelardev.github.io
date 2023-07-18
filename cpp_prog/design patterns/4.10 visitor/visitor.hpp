/***************************************************************
 * The interface file for Visitor Class *
 ***************************************************************/
#ifndef VISITOR_H
#define VISITOR_H

#include <iostream>
#include <string>

using namespace std;

// Definition of abstract Visitor class
class Visitor
{
    public:
        virtual void visit() = 0;
};

// Definition of concrete EnglishVisitor class
class EnglishVisitor : public Visitor
{
    public:
        void visit();
};

// Definition of concrete FrenchVisitor class
class FrenchVisitor : public Visitor
{
    public:
        void visit();
};

// Definition of concrete SpanishVisitor class
class SpanishVisitor : public Visitor
{
    public:
        void visit();
};

#endif
