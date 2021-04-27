#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
const int MAX = 1000000;

int main(void)
{
	std::cin.tie(NULL);
	std::ios::sync_with_stdio(0);
	vector<int> prime;
	bool isPrime[MAX];
	fill(isPrime, isPrime + MAX + 1, true);
	for (int i = 2; i <= MAX; i++)
	{
		if (isPrime[i])
			prime.push_back(i);
		for (int j = i * 2; j <= MAX; j += i)
			isPrime[j] = false;
	}

	while (1)
	{
		int n, i = 0, flag = 0;
		cin >> n;
		if (n == 0)
			break ;
		while (n > prime[i])
		{
			if (isPrime[n - prime[i]] == true)
			{
				flag = 1;
				cout << n << " = " << prime[i] << " + " << n - prime[i] << '\n';
				break ;
			}
			i++;
		}
		if (flag == 0)
		{
			cout << "Goldbach's conjecture is wrong.\n";
		}
	}
}
