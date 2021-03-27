#include <iostream>

using namespace std;

int main()
{
	int C, N;
	cin >> C;
	while (C--)
	{
		int arr[1000];
		int sum = 0;
		cin >> N;
		for (int i = 0; i < N; i++)
		{
			cin >> arr[i];
			sum += arr[i];
		}
		double m = sum / (double)N;
		int cnt = 0;
		for (int i = 0; i < N; i++)
		{
			if (arr[i] > m)
				cnt++;
		}
		double ret = cnt / (double)N * 100;
		cout << fixed;
		cout.precision(3);
		cout << ret << "%\n";
	}
}
