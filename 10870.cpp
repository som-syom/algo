#include <iostream>

using namespace std;

int	pivo(int num)
{
	if (num == 0)
		return (0);
	if (num == 1)
		return (1);
	return (pivo(num - 1) + pivo(num - 2));
}

int main(void)
{
	int n;

	cin >> n;
	int ret = pivo(n);
	cout << ret << '\n';
}