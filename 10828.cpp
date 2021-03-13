#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main(void) {
	stack<int> s;
	int T;

	cin >> T;
	while (T--)
	{
		string	cmd;
		int		n;
		cin >> cmd;
		if (cmd == "push")
		{
			cin >> n;
			s.push(n);
		}
		else if (cmd == "pop")
		{
			if (s.empty() == true)
				cout << "-1" << endl;
			else {
				cout << s.top() << endl;
				s.pop();
			}
		}
		else if (cmd == "size")
		{
			cout << s.size() << endl;
		}
		else if (cmd == "empty")
		{
			cout << s.empty() << endl;
		}
		else if (cmd == "top")
		{
			s.empty()? cout << "-1" << endl
					:cout << s.top() << endl;
		}
	}
}
