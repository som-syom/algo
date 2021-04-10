#include <iostream>
#include <algorithm>
using namespace std;

int	arr[500001];
int N;

int low_search(int k)
{
	int middle;
	int low = 0;
	int high = N;

	while (high > low)
	{
		middle = (high + low) / 2;
		if (arr[middle] < k)
			low = middle + 1;
		else
			high = middle;
	}
	return (low + 1);
}

int up_search(int k)
{
	int middle;
	int low = 0;
	int high = N;

	while (high > low)
	{
		middle = (high + low) / 2;
		if (arr[middle] <= k)
			low = middle + 1;
		else
			high = middle;
	}
	return (high + 1);
}

int main(void)
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);
	cin >> N;
	for (int i = 0; i < N; i++) // 숫자카드 입력 받기
	{
		cin >> arr[i];
	}
	sort(arr, arr + N); // 정렬

	int M;
	cin >> M;
	for (int i = 0; i < M; i++)
	{
		int k;
		cin >> k;
		int l, h;
		l = low_search(k);
		h = up_search(k);
		cout << h - l;
		if (i < M - 1)
			cout << ' ';
	}
	cout << '\n';
}
