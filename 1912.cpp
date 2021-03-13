#include <iostream>
#include <algorithm>

using namespace std;

int arr[100001];

int main(void)
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);
	int n;
	cin >> n;
	cin >> arr[0];
	int ret = arr[0];
	for (int i = 1; i < n; i++)
	{
		cin >> arr[i];
		arr[i] = max(arr[i - 1] + arr[i], arr[i]);
		ret = max(ret, arr[i]);
	}
	cout << ret << '/n';
}
