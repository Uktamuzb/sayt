#include <iostream>
using namespace std;
int main ()
{
	float a,b,menu;	char amal;
	cout<<"kankulator"<<endl;
	cout<<"a: ";	cin>>a;
	cout<<"amal: ";	cin>>amal;
	
	switch(amal){
		case '+': cout<<"b: ";	cin>>b; cout<<"javob: ";	cout<<a+b; break;
		case '-': cout<<"b: ";	cin>>b; cout<<"javob: ";	cout<<a-b; break;
		case '/': cout<<"b: ";	cin>>b; cout<<"javob: ";	cout<<a/b; break;
		case '*': cout<<"b: ";	cin>>b; cout<<"javob: ";	cout<<a*b; break;
}
}