#include <iostream>
#include <stack>
#include <queue>
using namespace std;

int main(void)
{
	int n, a, i = 1;
	stack<int> s;
	queue<char> res;

	cin >> n;
	while (n--)
	{
		cin >> a;
		if (s.empty() == true || s.top() < a)
		{
			while (s.empty() == true || s.top() != a)
			{
				s.push(i);
				res.push('+');
				i++;
			}
			s.pop();
			res.push('-');
		}
		else
		{
			if (s.top() == a)
			{
				s.pop();
				res.push('-');
			}
			else
				break ;
		}
	}
	if (s.empty() == false)
		cout << "NO" << endl;
	else
	{
		while (res.empty() != true)
		{
			cout << res.front() << '\n';
			res.pop();
		}
	}
}
