#include <iostream>

using namespace std;
int arr[10];

int main()
{
	int A, B, C;
	cin >> A >> B >> C;

	int ret = A * B * C;
	while (ret > 0)
	{
		arr[ret % 10]++;
		ret /= 10;
	}
	for (int i = 0; i < 10; i++)
		cout << arr[i] << '\n';
}
