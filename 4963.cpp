#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int map[51][51];
bool visited[51][51];
int w, h;

void bfs(int y, int x)
{
	queue<int> qx;
	queue<int> qy;
	visited[y][x] = true;
	qx.push(x);
	qy.push(y);
	while (!qx.empty() && !qy.empty())
	{
		x = qx.front(); qx.pop();
		y = qy.front(); qy.pop();

		int nx[] = {-1, -1, -1, 0, 0, 1, 1, 1};
		int ny[] = {-1, 0, 1, -1, 1, -1, 0, 1};
		for (int i = 0; i < 8; i++)
		{
			int dx = x + nx[i];
			int dy = y + ny[i];
			if (0 <= dx && dx < w && 0 <= dy && dy < h
				&& map[dy][dx] == 1 && visited[dy][dx] == false)
			{
				visited[dy][dx] = true;
				qx.push(dx);
				qy.push(dy);
			}
		}
	}

}

int main(void)
{
	while (1)
	{
		cin >> w >> h;
		if (w == 0 && h == 0) // 0일때 입력종료
			break ;
		for (int i = 0; i < h; i++) // 맵 입력 받기
		{
			for (int j = 0; j < w; j++)
				cin >> map[i][j];
		}

		int ret = 0;
		for (int i = 0; i < h; i++)
		{
			for (int j = 0; j < w; j++)
			{
				if (map[i][j] == 1 && visited[i][j] == false)
				{
					bfs(i, j);
					ret++;
				}
			}
		}
		cout << ret << '\n';
		for (int i = 0; i < 51; i++)
		{
			for (int j = 0; j < 51; j++)
			{
				map[i][j] = 0;
				visited[i][j] = false;
			}
		}
	}
}
