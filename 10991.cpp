#include <iostream>
using namespace std;

int main(void) {
	int i, j, k, n;

	cin >> n;
	j = 1;
	for (i = n - 1; i >= 0; i--)
	{
		for (k = i; k > 0; k--)
			cout << " ";
		for (k = j; k > 0; k--)
		{
			if (k % 2 == 0)
				cout << " ";
			else
				cout << "*";
		}
		cout << "\n";
		j += 2;
	}
}
