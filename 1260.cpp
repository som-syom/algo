#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>

using namespace std;
bool	visited[1001];
vector<int> graph[1001];

void dfs(int u)
{
	cout << u << ' ';
	visited[u] = true;
	for (int i = 0; i < graph[u].size(); i++)
	{
		int v = graph[u][i];
		if (visited[v] == false)
		{
			dfs(v);
		}
	}
}

void bfs(int u)
{
	queue<int> q;

	q.push(u);
	visited[u] = true;
	while (!q.empty())
	{
		u = q.front(); q.pop();
		cout << u << ' ';
		for (int i = 0; i < graph[u].size(); i++)
		{
			int v = graph[u][i];
			if (!visited[v])
			{
				q.push(v);
				visited[v] = true;
			}
		}
	}
}

int main(void)
{
	int N, M, V;
	cin >> N >> M >> V;
	for (int i = 0; i < M; i++)
	{
		int u, v;
		cin >> u >> v;
		graph[u].push_back(v);
		graph[v].push_back(u);
	}
	for (int i = 0; i <= N; i++)
	{
		sort(graph[i].begin(), graph[i].end());
	}
	dfs(V);
	for (int i = 0; i <= 1001; i++)
		visited[i] = false;
	cout << endl;
	bfs(V);
	return (0);
}
