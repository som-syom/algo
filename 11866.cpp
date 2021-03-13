#include <iostream>
#include <queue>
using namespace std;

int main(void)
{
	queue<int> q;
	int N, K, i = 1;

	cin >> N >> K;
	while (i <= N)
	{
		q.push(i);
		i++;
	}
	cout << "<";
	while (q.empty() == false)
	{
		i = 0;
		while (i < K - 1)
		{
			q.push(q.front());
			q.pop();
			i++;
		}
		cout << q.front();
		q.pop();
		if (q.empty() == false)
			cout << ", ";
	}
	cout << ">\n";
}
