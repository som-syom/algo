#include <iostream>
#include <stack>

using namespace std;

int main(void) {
	stack<int> s;
	int res = 0;
	int K, n;

	cin >> K;
	while (K--)
	{
		cin >> n;
		if (n == 0)
		{
			res -= s.top();
			s.pop();
		}
		else
		{
			res += n;
			s.push(n);
		}
	}
	cout << res << endl;
}
