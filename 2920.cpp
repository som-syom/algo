#include <iostream>
using namespace std;

int main(void)
{
	int arr[8];

	for (int i = 0; i < 8; i++)
		cin >> arr[i];
	int flag; // 1 = ascending, 2 = descending, 3 = mixed
	if (arr[0] == 1)
		flag = 1;
	else if (arr[0] == 8)
		flag = 2;
	else
		flag = 3;
	if (flag != 3)
	{
		for (int i = 1; i <= 8; i++)
		{
			if (flag == 1 && arr[i - 1] != i)
			{
				flag = 3;
				break ;
			}
			else if (flag == 2 && arr[i - 1] != 9 - i)
			{
				flag = 3;
				break ;
			}
		}
		if (flag == 1)
			cout << "ascending\n";
		else if (flag == 2)
			cout << "descending\n";
	}
	if (flag == 3)
		cout << "mixed\n";
}
