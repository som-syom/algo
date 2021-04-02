#include <iostream>
#include <queue>
using namespace std;

int map[101][101];
bool visited[101][101];
int N, M;

void	bfs(int x, int y, int count)
{
	queue<int> qx;
	queue<int> qy;
	queue<int> qcount;
	qx.push(x);
	qy.push(y);
	qcount.push(count);
	while (!qx.empty() && !qy.empty()) {
		x = qx.front(); qx.pop();
		y = qy.front(); qy.pop();
		count = qcount.front(); qcount.pop();
		if (x == M - 1 && y == N - 1) {
			cout << count << endl;
			return ;
		}
		int dx[] = {-1, 1, 0, 0};
		int dy[] = {0, 0, -1, 1};
		for (int i = 0; i < 4; i++) {
			int nx = x + dx[i];
			int ny = y + dy[i];
			if (nx >= 0 && nx < M && ny >= 0 && ny < N
					&& map[ny][nx] == 1
					&& !visited[ny][nx]) {
				visited[ny][nx] = true;
				qx.push(nx);
				qy.push(ny);
				qcount.push(count + 1);
			}
		}
	}
}
int	main(void)
{
	char c;
	cin >> N >> M;
	for (int y = 0; y < N; y++) {
		for (int x = 0; x < M; x++) {
			cin >> c;
			map[y][x] = c - '0';
		}
	}
	bfs(0, 0, 1);
	return 0;
}
