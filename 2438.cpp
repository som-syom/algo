#include <iostream>
using namespace std;

int main(void)
{
	int i, j, n;

	cin >> n;
	for(i = 1 ; i <= n ; i++)
	{
		for(j = i; j > 0 ; j--)
			cout << "*";
		cout << "\n";
	}
}
