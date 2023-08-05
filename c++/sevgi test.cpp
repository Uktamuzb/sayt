#include <iostream>
#include <stdlib.h>
#include <time.h>
using namespace std;
int main ()
{
	string ism,ismi;	int sevgi=0;	srand(time(NULL));	sevgi=rand()% 101;
	menu:
		
	cout<<"ug'il bola: "; cin>>ism;
	cout<<"qiz bola: "; cin>>ismi;
			
//	if(ism=="uktam"&& ismi=="jasmin"){
//		cout<<"sevgi: "<<100<<"%\n\n";	 goto menu;	
//		}
		cout<<"sevgi: "<<sevgi<<"%\n";  goto menu; 
}