#include <iostream>
#include <deque>
#include <string>
using namespace std;

int main()
{
	deque<int> d;
	string str;
	int N, a;

	cin >> N;
	while (N--)
	{
		cin >> str;
		if (str == "push_front")
		{
			cin >> a;
			d.push_front(a);
		}
		else if (str == "push_back")
		{
			cin >> a;
			d.push_back(a);
		}
		else if (str == "pop_front")
		{
			if (d.empty() == true)
				cout << "-1\n";
			else
			{
				cout << d.front() << '\n';
				d.pop_front();
			}
		}
		else if (str == "pop_back")
		{
			if (d.empty() == true)
				cout << "-1\n";
			else
			{
				cout << d.back() << '\n';
				d.pop_back();
			}
		}
		else if (str == "size")
			cout << d.size() << '\n';
		else if (str == "empty")
		{
			if (d.empty() == true)
				cout << "1\n";
			else
				cout << "0\n";
		}
		else if (str == "front")
		{
			if (d.empty() == true)
				cout << "-1\n";
			else
				cout << d.front() << '\n';
		}
		else if (str == "back")
		{
			if (d.empty() == true)
				cout << "-1\n";
			else
				cout << d.back() << '\n';
		}
	}
}
