#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
const int MAX = 10000000;
bool isPrime[MAX];

int main(void)
{
	std::cin.tie(NULL);
	std::ios::sync_with_stdio(0);
	vector<int> prime;
	
	fill(isPrime, isPrime + MAX + 1, true);
	for (int i = 2; i <= MAX; i++)
	{
		if (isPrime[i])
			prime.push_back(i);
		for (int j = i * 2; j <= MAX; j += i)
			isPrime[j] = false;
	}

    int N;
    cin >> N;
    int i = 0;
    while (N > 1)
    {
        while (1)
        {
            if (N % prime[i] == 0)
            {
                cout << prime[i] <<'\n';
                break ;
            }
            i++;
        }
        N /= prime[i];
    }
}