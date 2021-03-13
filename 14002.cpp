#include <iostream>
#include <algorithm>
#include <stack>

using namespace std;

int arr[1001];
int dp[1001];

int main(void)
{
	int N;
	cin >> N;

	for (int i = 0; i < N; i++)
		cin >> arr[i];
	dp[0] = 1;
	int ret = 1;
	for (int i = 1; i < N; i++)
	{
		dp[i] = 1;
		for (int j = 0; j < i; j++)
		{
			if (arr[j] < arr[i])
				dp[i] = max(dp[i], dp[j] + 1);
			ret = max(ret, dp[i]);
		}
	}
	cout << ret << '\n';

	int tmp = ret;
	stack<int> s;
	for (int i = N; i >= 0; i--)
	{
		if (dp[i] == tmp)
		{
			s.push(arr[i]);
			tmp--;
		}
		if (tmp == 0)
			break ;
	}
	while (s.empty() == false)
	{
		cout << s.top();
		if (s.size() > 1)
			cout << ' ';
		s.pop();
	}
}
