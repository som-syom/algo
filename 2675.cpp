#include <iostream>
#include <string>

using namespace std;

int main(void)
{
	int T;
	cin >> T;
	while (T--)
	{
		int R;
		string s;
		cin >> R >> s;
		for (int i = 0; s[i]; i++)
		{
			for(int j = 0; j < R; j++)
				cout << s[i];
		}
		cout << '\n';
	}
}
