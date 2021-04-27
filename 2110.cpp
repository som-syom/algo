#include <iostream>
#include <algorithm>

using namespace std;

int N, C; // N = 집의 갯수 , C = 공유기의 갯수
int arr[200000];

long long b_search(void)
{
	long long middle;
	long long high = 1e9;
	long long low = 0;

	long long ret = 0;
	while (high >= low)
	{
		middle = (high + low) / 2;
		int cnt = 1; // 첫번째 집엔 무조건 공유기가 있다 가정하고
		int j = 0; // 이전집 주소 인덱스
		for (int i = 1; i < N; i++)
		{
			if (arr[i] - arr[j] >= middle)
			{
				cnt++;
				j = i;
			}
		}
		if (cnt >= C)
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
	cin >> N >> C;
	for (int i = 0; i < N; i++)
	{
		cin >> arr[i];
	}
	sort(arr, arr + N);
	long long ret = b_search();
	cout << ret << '\n';
	return (0);
}