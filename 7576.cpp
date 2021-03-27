#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int map[1001][1001];
bool visited[1001][1001];
vector<int> tx, ty;
queue<int> qcnt;
int M, N; // M : 가로 N : 세로
int cnt;

void bfs()
{
	int x, y;
	queue<int> qx, qy;
	for (int i = 0; i < ty.size(); i++)
	{
		qx.push(tx[i]);
		qy.push(ty[i]);
		visited[ty[i]][tx[i]] = true;
		qcnt.push(0);
	}
	while (!qx.empty() && !qy.empty())
	{
		x = qx.front(); qx.pop();
		y = qy.front(); qy.pop();
		cnt = qcnt.front(); qcnt.pop();

		int dx[] = {-1, 1, 0, 0};
		int dy[] = {0, 0, 1, -1};
		for (int i = 0; i < 4; i++)
		{
			int nx = x + dx[i];
			int ny = y + dy[i];
			if (0 <= nx && nx < M && 0 <= ny && ny < N
				&& map[ny][nx] == 0 && visited[ny][nx] == false)
			{
				visited[ny][nx] = true;
				qx.push(nx);
				qy.push(ny);
				qcnt.push(cnt + 1);
			}
		}
	}
}

int main(void)
{
	cin >> M >> N;

	int tmp = 0;
	for (int y = 0; y < N; y++) // map 입력받기
	{
		for (int x = 0; x < M; x++)
		{
			cin >> map[y][x];
			if (map[y][x] == 1) // 시작값 저장
			{
				tx.push_back(x);
				ty.push_back(y);
			}
			else if (map[y][x] == 0)
				tmp++;
		}
	}

	if (tmp == 0)
		cout << "0\n";
	else
	{
		bfs();
		for (int y = 0; y < N; y++)
		{
			for (int x = 0; x < M; x++)
			{
				if (visited[y][x] == 0 && map[y][x] == 0)
				{
					cout << "-1\n";
					return (0);
				}
			}
		}
		cout << cnt << '\n';
	}
}
