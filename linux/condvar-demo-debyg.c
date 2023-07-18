/* Copyright (C) 2017, Chris Simmonds (chris@2net.co.uk) */

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>
#include <string.h>

char g_data[128];
pthread_cond_t cv = PTHREAD_COND_INITIALIZER;
pthread_mutex_t mutx = PTHREAD_MUTEX_INITIALIZER;

void *consumer(void *arg)
{
	printf("Consumer -> lock mutx\n");
	pthread_mutex_lock(&mutx);
	printf("Consumer -> locked mutx\n");
	while (strlen(g_data) == 0)
	{
		printf("Consumer -> wait cv, unlocked mutx\n");
		pthread_cond_wait(&cv, &mutx);
	}

	/* Got data */
	printf("%s\n", g_data);
	/* Truncate to null string again */
	g_data[0] = 0;
	pthread_mutex_unlock(&mutx);
	printf("Consumer -> unlocked mutx\n");

	return NULL;
}

void *producer(void *arg)
{
	printf("Start sleep\n");
	sleep(1);

	printf("Producer -> End sleeping\n");
	pthread_mutex_lock(&mutx);
	printf("Producer -> locked mutx\n");

	sprintf(g_data, "Data item");
	pthread_mutex_unlock(&mutx);
	printf("Producer -> unlocked mutx\n");

	pthread_cond_signal(&cv);
	printf("Producer -> send signal\n");

	return NULL;
}

int main(int argc, char *argv[])
{
	pthread_t producer_thread;
	pthread_t consumer_thread;

	pthread_create(&producer_thread, NULL, producer, NULL);
	pthread_create(&consumer_thread, NULL, consumer, NULL);

	/* Wait for both threads to finish */
	pthread_join(producer_thread, NULL);
	pthread_join(consumer_thread, NULL);

	return 0;
}
