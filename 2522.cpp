#include <iostream>
using namespace std;

int main(void) {
	int i, j, n;

	cin >> n;
	for(i = 1; i <= 2 * n - 1; i++)
	{
		if (i <= n)
		{
			for(j = n - i; j > 0; j--)
				cout << " ";
			for(j = i; j > 0; j--)
				cout << "*";
			cout << "\n";
		}
		else
		{
			for(j = -n + i; j > 0; j--)
				cout << " ";
			for(j = n * 2 - i; j > 0; j--)
				cout << "*";
			cout << "\n";
		}
	}
}
