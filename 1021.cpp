#include <iostream>
#include <queue>

using namespace std;

int main(void) {
	int N, M, i, res;
	queue<int> q;
	cin >> N >> M;

	i = 1;
	res = 0;
	while (i <= N) {
		q.push(i);
		i++;
	}
	int j = 0;
	while (M--) {
		int num, cnt;
		cin >> num;
		cnt = 0;
		while (1) {
			if (num == q.front()) {
				q.pop();
				break ;
			}
			cnt++;
			q.push(q.front());
			q.pop();
		}
		if (cnt > (N - j) / 2)
			cnt = N - j - cnt;
		j++;
		res += cnt;
	}
	cout << res << endl;
}
