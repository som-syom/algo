#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main(void)
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	int T, n;
	string str;
	queue<int> q;

	cin >> T;
	while (T--)
	{
		cin >> str;
		if (str == "push")
		{
			cin >> n;
			q.push(n);
		}
		else if (str == "pop")
		{
			if (q.empty() == true)
				cout << "-1\n";
			else
			{
				cout << q.front() << '\n';
				q.pop();
			}
		}
		else if (str == "size")
		{
			cout << q.size() << '\n';
		}
		else if (str == "empty")
		{
			if (q.empty() == true)
				cout << "1\n";
			else
				cout << "0\n";
		}
		else if (str == "front")
		{
			if (q.empty() == true)
				cout << "-1\n";
			else
				cout << q.front() << '\n';
		}
		else if (str == "back")
		{
			if (q.empty() == true)
				cout << "-1\n";
			else
				cout << q.back() << '\n';
		}
	}
}
