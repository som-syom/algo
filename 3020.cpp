#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main(void)
{
	int N, H;
	int ret = 987654321;

	cin >> N >> H;
	vector<int> arr1(N / 2), arr2(N / 2);
	for (int i = 0; i < N / 2; i++)
		cin >> arr1[i] >> arr2[i];
	sort(arr1.begin(), arr1.end());
	sort(arr2.begin(), arr2.end());

	int cnt = 1;
	for (int i = 1; i <= H; i++)
	{
		int tmp = 0;
		tmp = arr1.size() - (lower_bound(arr1.begin(), arr1.end(), i) - arr1.begin());
		tmp += arr2.size() - (upper_bound(arr2.begin(), arr2.end(), H - i) - arr2.begin());

		if (tmp == ret)
			cnt++;
		else if (tmp < ret)
		{
			ret = tmp;
			cnt = 1;
		}
	}
	cout << ret << ' ' << cnt << '\n';
	return (0);
}
