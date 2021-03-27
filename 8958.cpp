#include <iostream>
#include <string>
using namespace std;

int main()
{
	int T;
	cin >> T;
	while (T--)
	{
		string s;
		cin >> s;
		int cnt = 1;
		int ret = 0;
		for (int i = 0; s[i]; i++)
		{
			if (s[i] == 'O')
			{
				ret += cnt;
				cnt++;
			}
			else
				cnt = 1;
		}
		cout << ret << '\n';
	}
}
