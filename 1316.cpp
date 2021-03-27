#include <iostream>
#include <string>

using namespace std;
bool arr[26];

int main(void)
{
	int N, ret = 0;
	cin >> N;
	while (N--)
	{
		string s;
		cin >> s;
		int i = 0, flag = 1;
		while (s[i])
		{
			if (arr[s[i] - 'a'] == true)
			{
				flag = 0;
				break ;
			}
			else
			{
				arr[s[i] - 'a'] = true;
				char c = s[i];
				while (s[i] == c)
					i++;
			}
		}
		if (flag == 1)
			ret++;
		for (int i = 0; i < 26; i++)
			arr[i] = false;
	}
	cout << ret << '\n';
}
