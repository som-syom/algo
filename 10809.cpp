#include <iostream>
#include <string>

using namespace std;

int main(void)
{
	int arr[26] = {-1, };
	string s;
	cin >> s;
	for (int i = 0; i < 26; i++)
		arr[i] = -1;
	for (int i = 0; s[i]; i++)
	{
		if ('a' <= s[i] && s[i] <= 'z')
		{
			if (arr[s[i] - 'a'] == -1)
				arr[s[i] - 'a'] = i;
		}
	}
	for (int i = 0; i < 26; i++)
		cout << arr[i] << '\n';
}
