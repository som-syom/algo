#include <iostream>
using namespace std;

int main(void)
{
	int i, j, n;

	cin >> n;
	for(i = n ; i > 0 ; i--)
	{
		for(j = i; j > 0 ; j--)
			cout << "*";
		cout << "\n";
	}
}
