#include <iostream>
#include <algorithm>

using namespace std;
int arr[100001];

int main(void)
{
	int N;
	cin >> N;

	int tmp = 2;
	int j = 1;
	arr[1] = 1;
	for (int i = 2; i <= N; i++)
	{
		arr[i] = 9999;
		for (j = 1; j * j <= i; j++)
		{
			if (j * j == i)
				arr[i] = 1;
			else
			{
				arr[i] = min(arr[i], 1 + arr[i - (j * j)]);
			}
		}
	}
	cout << arr[N] << '\n';
}
