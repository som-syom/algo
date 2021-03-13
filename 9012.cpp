#include <iostream>
#include <string>
#include <stack>

using namespace std;

bool check_space(){
	string ps;
	stack<char> s;
	int len, i;

	cin >> ps;
	i = -1;
	len = ps.length();
	while (len > ++i)
	{
		if (ps[i] == '(')
		{
			s.push('(');
		}
		else if (ps[i] == ')') {
			if (s.empty() == 1)
				return (false);
			s.pop();
		}
	}
	if (s.empty() == 0)
		return (false);
	return (true);
}

int main(void) {
	int T;
	cin >> T;

	while (T--)
	{
		check_space()? cout << "YES" << endl
					: cout << "NO" << endl;
	}
}
