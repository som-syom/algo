#include <iostream>
#include <queue>
#include <algorithm>
using namespace std;

int map[101][101];
int visited[101][101]; // 0:unvisited , 1, 2, 3... : components
int N;
int min_num = 999;
int dx[] = {1, -1, 0, 0};
int dy[] = {0, 0, -1, 1};

void bfs(int x, int y, int tmp)
{
	queue<int> qx;
	queue<int> qy;

	visited[y][x] = tmp;
	qx.push(x);
	qy.push(y);
	while (!qx.empty() && !qy.empty())
	{
		x = qx.front(); qx.pop();
		y = qy.front(); qy.pop();
		for (int i = 0; i < 4; i++)
		{
			int nx = x + dx[i];
			int ny = y + dy[i];
			if (0 <= nx && nx < N && 0 <= ny && ny < N
				&& map[ny][nx] == 1 && visited[ny][nx] == 0)
			{
				visited[ny][nx] = tmp;
				qx.push(nx);
				qy.push(ny);
			}
		}
	}
}

void bfs2(int x, int y, int check)
{
	bool visi[101][101];
	for (int i = 0; i < 101; i++)
	{
		for (int j = 0; j < 101; j++)
			visi[i][j] = false;
	}

	queue<int> qx, qy, qcnt;
	int cnt;
	qx.push(x);
	qy.push(y);
	qcnt.push(0);
	visi[y][x] = true;
	while (!qx.empty() && !qy.empty())
	{
		x = qx.front(); qx.pop();
		y = qy.front(); qy.pop();
		cnt = qcnt.front(); qcnt.pop();
		if (visited[y][x] != 0 && visited[y][x] != check)
		{
			min_num = min(min_num, cnt);
			return ;
		}
		for (int i = 0; i < 4; i++)
		{
			int nx = x + dx[i];
			int ny = y + dy[i];
			if (0 <= nx && nx < N && 0 <= ny && ny < N
				&& visited[ny][nx] != check && visi[ny][nx] == false)
			{
				visi[ny][nx] = true;
				qx.push(nx);
				qy.push(ny);
				qcnt.push(cnt + 1);
			}
		}
	}

}

int main(void)
{
	cin >> N;
	for (int y = 0; y < N; y++) // 입력받기
	{
		for (int x = 0; x < N; x++)
			cin >> map[y][x];
	}

	int tmp = 1;
	for (int y = 0; y < N; y++) // 섬 나누기
	{
		for (int x = 0; x < N; x++)
		{
			if (map[y][x] == 1 && visited[y][x] == 0)
			{
				bfs(x, y, tmp);
				tmp++;
			}
		}
	}

	for (int y = 0; y < N; y++)
	{
		for (int x = 0; x < N; x++)
		{
			if (map[y][x] == 1)
			{
				for (int i = 0; i < 4; i++)
				{
					int nx = x + dx[i];
					int ny = y + dy[i];
					if (0 <= nx && nx < N && 0 <= ny && ny < N
						&& map[ny][nx] == 0)
					{
						bfs2(nx, ny, visited[y][x]);
					}
				}
			}
		}
	}
	cout << min_num << '\n';
}
