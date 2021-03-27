#include <iostream>

using namespace std;
int arr[42];

int main()
{
	for (int i = 0; i < 10; i++)
	{
		int n;
		cin >> n;
		arr[n % 42]++;
	}
	int ret = 0;
	for (int i = 0; i < 42; i++)
	{
		if (arr[i] != 0)
			ret++;
	}
	cout << ret << '\n';
}
