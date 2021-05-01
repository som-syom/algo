#include <iostream>
#include <algorithm>

using namespace std;

int N, k;

int main(void)
{
	cin >> N >> k;

	long long ret = 0;
	int middle;
	int high = k;
	int low = 1;

	while (high >= low)
	{
		long long tmp = 0;
		middle = (high + low) / 2;
		for (int i = 1; i <= N; i++)
			tmp += min(middle / i, N);
		if (tmp >= k)
		{
			ret = middle;
			high = middle - 1;
		}
		else
			low = middle + 1;
	}
	cout << ret << '\n';
}
