#include <iostream>

using namespace std;
bool arr[10001];

void self_num(int n)
{
	int sum = n;
	while (n > 0)
	{
		sum += n % 10;
		n /= 10;
	}
	if (sum < 10000)
		arr[sum] = true;
}

int main()
{
	for (int i = 1; i <= 10000; i++)
		self_num(i);
	for (int i = 1; i < 10000; i++)
	{
		if (arr[i] == false)
			cout << i << '\n';
	}
}
