#include <iostream>

using namespace std;

int main(void)
{
	char s[200];
	cin >> s;

	int ret = 0, i = 0;
	while (s[i])
	{
		if (s[i] == 'c' && (s[i + 1] == '=' || s[i + 1] == '-'))
		{
			ret++;
			i += 2;
		}
		else if (s[i] == 'd' && s[i + 1] == 'z' && s[i + 2] == '=')
		{
			ret++;
			i += 3;
		}
		else if (s[i] == 'd' && s[i + 1] == '-')
		{
			ret++;
			i += 2;
		}
		else if ((s[i] == 'l' || s[i] == 'n') && s[i + 1] == 'j')
		{
			ret++;
			i += 2;
		}
		else if ((s[i] == 's' || s[i] == 'z') && s[i + 1] == '=')
		{
			ret++;
			i += 2;
		}
		else
		{
			i++;
			ret++;
		}
	}
	cout << ret << '\n';
}
