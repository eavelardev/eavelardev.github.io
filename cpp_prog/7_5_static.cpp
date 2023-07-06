// 7.5.2 Static Member Functions

#include <iostream>

using namespace std;

class Rectangle
{
    private:
        double length;
        double height;
        static int count; // static data member
    public:
        Rectangle(double length, double height);
        Rectangle();
        Rectangle(const Rectangle& rect);
        ~Rectangle();
        static int getCount(); //static member function
};

int Rectangle::count = 0;

Rectangle::Rectangle(double len, double hgt)
: length(len), height(hgt)
{
    count++;
}

Rectangle::Rectangle()
: length(0.0), height(0.0)
{
    count ++;
}

Rectangle::Rectangle(const Rectangle& rect)
: length(rect.length), height(rect.height)
{
    count++;
}

Rectangle::~Rectangle()
{
    count--;
}

int Rectangle::getCount()
{
    return count;
}

int main()
{
    {
        Rectangle rect1 (3.2, 1.2);
        Rectangle rect2 (1.5, 2.1);
        Rectangle rect3;
        Rectangle rect4 (rect1);
        Rectangle rect5 (rect2);
        cout << "Count of objects: " << rect5.getCount() << endl;        
    }

    cout << "Count of objects: " << Rectangle::getCount() << endl;

    return 0;
}
