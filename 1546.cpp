#include <iostream>
#include <algorithm>

using namespace std;
double arr[1000];

int main()
{
	int N;
	cin >> N;
	int m = 0;
	for (int i = 0; i < N; i++)
	{
		int a;
		cin >> a;
		arr[i] = a;
		m = max(m, a);
	}
	double sum = 0;
	for (int i = 0; i < N; i++)
	{
		arr[i] = arr[i] / (double)m * 100;
		sum += arr[i];
	}
	double ret = sum / (double)N;
	cout << ret << '\n';
}
