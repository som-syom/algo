#include <iostream>
#include <string>

using namespace std;

int main(void)
{
	int N, sum = 0;
	string s;
	cin >> N;
	cin >> s;
	for (int i = 0; i < N; i++)
	{
		sum += s[i] - '0';
	}
	cout << sum << '\n';
}
