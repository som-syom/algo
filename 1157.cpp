#include <iostream>
#include <string>

using namespace std;
int arr[26];

int main(void)
{
	int max_n = 0;
	char c;
	string s;
	cin >> s;
	for (int i = 0; s[i]; i++)
	{
		if ('a' <= s[i] && s[i] <= 'z')
			s[i] -= 'a' - 'A';
		arr[s[i] - 'A']++;
	}
	int flag = 0;
	for (int i = 0; i < 26; i++)
	{
		if (max_n < arr[i])
		{
			max_n = arr[i];
			c = 'A' + i;
			flag = 0;
		}
		else if (max_n == arr[i])
			flag = 1;
	}
	if (flag == 1)
		cout << "?\n";
	else
		cout << c << '\n';
}
