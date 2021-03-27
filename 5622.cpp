#include <iostream>
#include <string>

using namespace std;

int main(void)
{
	string s;
	cin >> s;
	int dir[] = {3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10};

	int ret = 0;
	for (int i = 0; s[i]; i++)
	{
		ret += dir[s[i] - 'A'];
	}
	cout << ret << '\n';
}
