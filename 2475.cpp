#include <iostream>
using namespace std;

int main(void)
{
	int arr[5];
	int tmp = 0;

	for (int i = 0; i < 5; i++)
	{
		cin >> arr[i];
		tmp += arr[i] * arr[i];
	}
	cout << tmp % 10 << '\n';
	return (0);
}
