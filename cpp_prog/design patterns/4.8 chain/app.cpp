/***************************************************************
 * The Application to test Chain-of-Responsibility Pattern *
 ***************************************************************/
#include "chain.hpp"

int main()
{
    // Arrival of loan 1
    cout << "Loan1:" << endl;
    Loan loan1(82000);
    cout << endl;

    // Arrival of loan 2
    cout << "Loan2:" << endl;
    Loan loan2(700);
    cout << endl;

    // Arrival of loan 3
    cout << "Loan3:" << endl;
    Loan loan3(146000);
    cout << endl;

    // Arrival of loan 4
    cout << "Loan4:" << endl;
    Loan loan4(3200000);
    cout << endl;

    return 0;
}