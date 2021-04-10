#include <iostream>
#include <algorithm>
using namespace std;

long long N, M;
int arr[1000000];

int b_search(void)
{
	long long middle;
	long long high = arr[N - 1];
	long long low = 0;

	long long ret = 0;
	while (high >= low)
	{
		middle = (high + low) / 2;
		long long sum = 0;;
		for (int i = 0; i < N; i++)
		{
			if (arr[i] > middle)
				sum += arr[i] - middle;
		}
		if (sum >= M)
		{
			if (ret < middle)
				ret = middle;
			low = middle + 1;
		}
		else
			high = middle - 1;
	}
	return (ret);
}

int main(void)
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);
	cin >> N >> M;
	for (int i = 0; i < N; i++)
	{
		cin >> arr[i];
	}
	sort(arr, arr + N);
	long long ret = b_search();
	cout << ret << '\n';
}
