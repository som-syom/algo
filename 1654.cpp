#include <iostream>
#include <algorithm>

using namespace std;

int K, N; // K = 랜선의 갯수, N = 필요한 랜선의 갯수
int arr[10000];

long long b_search(void)
{
	long long middle;
	long long high = 1e11; // 나올수있는 수보다 더 큰 숫자 넣는게 좋음
	long long low = 0;

	long long ret = 0;
	while (high >= low)
	{
		middle = (high + low) / 2;
		long long sum = 0;
		for (int i = 0; i < K; i++)
		{
			sum += arr[i] / middle;
		}
		if (sum >= N)
		{
			if (ret < middle)
				ret = middle;
			low = middle + 1;
		}
		else
		{
			high = middle - 1;
		}
	}
	return (ret);
}

int main(void)
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);
	cin >> K >> N;
	for (int i = 0; i < K; i++)
	{
		cin >> arr[i];
	}
	sort(arr, arr + K);
	long long ret = b_search();
	cout << ret << '\n';
	return (0);
}