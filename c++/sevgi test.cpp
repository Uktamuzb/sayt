#include <iostream>
#include <stdlib.h>
#include <time.h>
using namespace std;
int main ()
{
//		C++ da SEVGI TESTI
	string boy,grill;	int sevgi=0;	srand(time(NULL));	sevgi=rand()% 101;
	menu:

	cout<<"ug'il bola: "; cin>>boy;
	cout<<"qiz bola: "; cin>>grill;

	if(boy=="uktam"&& grill=="jj"){
		cout<<"sevgi: "<<100<<"%\n\n";	 goto menu;	
		cout<<"sevgi: "<<sevgi<<"%\n"<<endl;  goto menu; 
}
		}
		