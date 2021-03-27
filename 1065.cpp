#include <iostream>

using namespace std;

int check_han(int n)
{
	if (n == 1000)
		return (0);
	int arr[3];
	for (int i = 0; i < 3; i++)
	{
		arr[i] = n % 10;
		n /= 10;
	}
	int d = arr[0] - arr[1];
	if (arr[2] + d == arr[1])
		return (1);
	else
		return (0);
}

int main(void)
{
	int N;
	cin >> N;
	if (N < 100)
		cout << N << '\n';
	else
	{
		int ret = 99;
		for (int i = 100; i <= N; i++)
		{
			if (check_han(i) == 1)
				ret++;
		}
		cout << ret << '\n';
	}
}
