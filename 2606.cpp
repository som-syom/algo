#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> graph[101];
bool visited[101];
int cnt = 0;

void bfs(int u)
{
	queue<int> q;
	visited[u] = true;
	q.push(u);
	while(!q.empty())
	{
		u = q.front(); q.pop();
		for (int i = 0; i < graph[u].size(); i++)
		{
			int v = graph[u][i];
			if (visited[v] == false)
			{
				q.push(v);
				visited[v] = true;
				cnt++;
			}
		}
	}
}

int main(void)
{
	int N, T;
	cin >> N >> T;
	while (T--)
	{
		int u, v;
		cin >> u >> v;
		graph[u].push_back(v);
		graph[v].push_back(u);
	}
	bfs(1);
	cout << cnt << '\n';
}
