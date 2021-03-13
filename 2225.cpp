#include <iostream>

using namespace std;
int arr[201][201];

int main(void)
{
	int N, K;
	cin >> N >> K;

	for (int i = 1; i <= N; i++)
		arr[1][i] = 1;
	for (int i = 2; i <= K; i++)
	{
		arr[i][1] = i;
		for (int j = 2; j <= N; j++)
		{
			arr[i][j] = (arr[i][j - 1] + arr[i - 1][j]) % 1000000000;
		}

	}
	cout << arr[K][N] << '\n';
}
