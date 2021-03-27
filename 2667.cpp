#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int map[26][26];
bool visited[26][26];
int N;
vector<int> ans;


void bfs(int x, int y)
{
	queue<int> qx;
	queue<int> qy;
	int cnt = 0;

	visited[x][y] = true;
	qx.push(x);
	qy.push(y);
	cnt++;
	while (!qx.empty() && !qy.empty())
	{
		x = qx.front(); qx.pop();
		y = qy.front(); qy.pop();
		int dx[] = {-1, 1, 0, 0};
		int dy[] = {0, 0, -1, 1};
		for (int i = 0; i < 4; i++)
		{
			int nx = x + dx[i];
			int ny = y + dy[i];
			if (nx >= 0 && nx < N && ny >= 0 && ny < N
				&& map[nx][ny] == 1 && visited[nx][ny] == false)
			{
				visited[nx][ny] = true;
				qx.push(nx);
				qy.push(ny);
				cnt++;
			}
		}
	}
	ans.push_back(cnt);
}

int main(void)
{
	cin >> N;

	for (int i = 0; i < N; i++)
	{
		for (int j = 0; j < N; j++)
		{
			char a;
			cin >> a;
			map[i][j] = a - '0';
		}
	}
	int ret = 0;
	for (int i = 0; i < N; i++)
	{
		for (int j = 0; j < N; j++)
		{
			if (map[i][j] == 1 && visited[i][j] == false)
			{
				bfs(i, j);
				ret++;
			}
		}
	}
	cout << ret << '\n';
	for (int i = 0; i < ret; i++)
	{
		for (int j = i + 1; j < ret; j++)
		{
			if (ans[i] > ans[j])
			{
				int tmp = ans[i];
				ans[i] = ans[j];
				ans[j] = tmp;
			}
		}
	}
	for (int i = 0; i < ret; i++)
		cout << ans[i] << '\n';
}
