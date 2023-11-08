#include<stdio.h>
int main()
{
	int num,r,n,arm=0;
	printf("enter a number");
	scanf("%d",&num);
	n=num;
	while(n!=0)
	{
		r=n%10;
		arm+=r*r*r;
		n=n/10;
	}
	if(arm==num)
	printf("it is a armstrong number");
	else
	printf("it is not an armstrong numebr");
	return 0;
}
//
