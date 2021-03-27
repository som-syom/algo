#include <iostream>
#include <string>

using namespace std;

int main(void)
{
	char s[1000002];
	int ret = 0;
	cin.getline(s, 1000001, '\n');
	int i = 0;
	while (s[i])
	{
		if (s[i] == ' ')
			i++;
		else if (s[i] != ' ')
		{
			ret++;
			while (s[i] != ' ' && s[i])
				i++;
		}
	}
	cout << ret << '\n';
}
