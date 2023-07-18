#include "observer.hpp"
#include <cstdlib>
#include <ctime>

int main()
{
    // Instantiation of subject
    Subject subject;

    // Instantiation of observers
    Observer1 observer1(&subject);
    Observer2 observer2(&subject);

    // Subscription of observers
    subject.subscribe(&observer1);
    subject.subscribe(&observer2);

    // Simulation of event
    bool flag = true;

    while (flag)
    {
        srand(time(0));
        int temp = rand();
        int price = temp % (100 - 10 + 1) + 10;
        
        if (price < 40)
        {
            subject.notify(price);
            flag = false;
        }
    }

    // Cancellation of subscriptions by observers
    subject.unsubscribe(&observer1);
    subject.unsubscribe(&observer2);

    return 0;
}