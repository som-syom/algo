#include <iostream>
#include <stack>
#include <string>

using namespace std;

int main(void)
{
	string str;
	int i;

	while (getline(cin, str, '\n'))
	{
		if (str[0] == '.')
			break ;
		else
		{
			stack<char> s;
			i = 0;
			while (str[i] != 0)
			{
				if (str[i] == '(' || str[i] == '[')
					s.push(str[i]);
				else if (str[i] == ')')
				{
					if (s.empty() == false && s.top() == '(')
						s.pop();
					else
					{
						s.push(str[i]);
						break ;
					}
				}
				else if (str[i] == ']')
				{
					if (s.empty() == false && s.top() == '[')
						s.pop();
					else
					{
						s.push(str[i]);
						break ;
					}
				}
				i++;
			}
			if (s.empty() == true)
				cout << "yes" << endl;
			else
				cout << "no" << endl;
		}
	}
}
