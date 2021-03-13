#include <iostream>
#include <stack>
#include <string>

using namespace std;

int main(void) {
	string str;
	int i = 0;
	int res = 0;
	stack<char> s;

	cin >> str;
	while (str[i] != 0) {
		if (str[i] == '(' && str[i + 1] == ')')
		{
			res += s.size();
			i++;
		}
		else if (str[i] == '(')
			s.push(str[i]);
		else if (str[i] == ')')
		{
			s.pop();
			res++;
		}
		i++;
	}
	cout << res << endl;
}
