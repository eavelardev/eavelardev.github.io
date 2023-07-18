#include "singleton.hpp"

// static data member
President* President::ptr = 0;

President::President (string nm)
:name(nm)
{
    cout << "The president was selected." << endl;
}

President* President::create(string name)
{
    if (!ptr)
        ptr = new President(name);
    else
        cout << "We already have a president!" << endl;

    return ptr;
}

string President::getName() const
{
    return name;
}
