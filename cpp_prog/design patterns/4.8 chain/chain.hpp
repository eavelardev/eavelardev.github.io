/***************************************************************
 * The interface file for Chain-of-Responsibility Pattern *
 ***************************************************************/
#ifndef CHAIN_HPP
#define CHAIN_HPP

#include <iostream>

using namespace std;

// The abstract class LoanOfficer
class LoanOfficer
{
    public:
        virtual void handle(int value) = 0;
        virtual ~LoanOfficer() {}
};

// The concrete class LoanOfficer1
class LoanOfficer1 : public LoanOfficer
{
    private:
        LoanOfficer *next;
    public:
        LoanOfficer1();
        ~LoanOfficer1();
        void handle(int value);
};

// The concrete class LoanOfficer2
class LoanOfficer2 : public LoanOfficer
{
    private:
        LoanOfficer *next;
    public:
        LoanOfficer2();
        ~LoanOfficer2();
        void handle(int value);
};

// The concrete class LoanOfficer3
class LoanOfficer3 : public LoanOfficer
{
    private:
        LoanOfficer *next;
    public:
        LoanOfficer3();
        ~LoanOfficer3();
        void handle(int value);
};

// The Loan class used as the front desk
class Loan
{
    private:
        int loanValue;
        LoanOfficer *next;
    public:
        Loan(int loanValue);
        ~Loan();
};

#endif
