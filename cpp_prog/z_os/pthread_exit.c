#include <pthread.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

void *thread(void *arg)
{
    char *ret;
    printf("thread() entered with argument '%s'\n", (char *)arg);
    if ((ret = (char *)malloc(20)) == NULL)
    {
        perror("malloc() error");
        exit(2);
    }
    strcpy(ret, "This is a test");
    pthread_exit(ret);
}

int main()
{
    pthread_t th_id;
    void *ret;
    char arg[] = "thread 1";

    if (pthread_create(&th_id, NULL, thread, arg) != 0)
    {
        perror("pthread_create() error");
        exit(1);
    }

    if (pthread_join(th_id, &ret) != 0)
    {
        perror("pthread_join() error");
        exit(3);
    }

    printf("thread exited with '%s'\n", (char *)ret);

    return 0;
}
