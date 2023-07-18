/***************************************************************
 * The implementation file for Chain-of-Responsibility Pattern *
 ***************************************************************/
#include "chain.hpp"

// Constructor
LoanOfficer1 ::LoanOfficer1()
{
    next = new LoanOfficer2();
}

// Destructor
LoanOfficer1 ::~LoanOfficer1()
{
    delete next;
}

// Handle function
void LoanOfficer1 ::handle(int loanValue)
{
    if (loanValue <= 1000)
    {
        cout << "I am Officer1. I will handle your loan." << endl;
        cout << "Please call me to discuss it together." << endl;
    }
    else
    {
        next->handle(loanValue);
    }
}

// Constructor
LoanOfficer2 ::LoanOfficer2()
{
    next = new LoanOfficer3();
}

// Destructor
LoanOfficer2 ::~LoanOfficer2()
{
    delete next;
}

// Handle function
void LoanOfficer2 ::handle(int loanValue)
{
    if (loanValue <= 100000)
    {
        cout << "I am Officer2. I will handle your loan." << endl;
        cout << "Please call me to discuss it together." << endl;
    }
    else
    {
        next->handle(loanValue);
    }
}

// Constructor
LoanOfficer3 ::LoanOfficer3()
{
    next = 0;
}

// Destructor
LoanOfficer3 ::~LoanOfficer3()
{
    delete next;
}

// Handle function
void LoanOfficer3 ::handle(int loanValue)
{
    if (loanValue > 100000 && loanValue <= 1000000)
    {
        cout << "I am Officer3. I will handle your loan." << endl;
        cout << "Please call me to discuss it together." << endl;
    }
    else
    {
        cout << "We cannot handle a loan of this amount." << endl;
    }
}

// Constructor
Loan ::Loan(int value)
    : loanValue(value)
{
    next = new LoanOfficer1();
    next -> handle(loanValue);
}

// Destructor
Loan ::~Loan()
{
    delete next;
}
