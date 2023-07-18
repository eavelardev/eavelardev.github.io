#include "builder.hpp"

int main()
{
    int type;
    do
    {
        cout << "Enter the type of vacation (1, 2, 3): ";
        cin >> type;
    } while (type < 1 || type > 3);
    
    Director::book(type);

    return 0;
}