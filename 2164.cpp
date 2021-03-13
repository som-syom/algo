#include <iostream>
#include <queue>
using namespace std;

int main(void)
{
	int N, i = 1;
	queue<int> q;

	cin >> N;
	while (i <= N)
	{
		q.push(i);
		i++;
	}
	while (q.size() != 1)
	{
		q.pop();
		q.push(q.front());
		q.pop();
	}
	cout << q.front() << "\n";
}
