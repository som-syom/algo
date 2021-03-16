#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

using namespace std;
vector<int> graph[20001];
int check[20001]; // 0: unvisited 1: red 2: blue

int bfs(int flag, int i)
{
	queue<int> q;

	q.push(i);
	check[i] = flag;
	while (!q.empty())
	{
		int u = q.front(); q.pop();
		if (check[u] == 1)
			flag = 2;
		else if (check[u] == 2)
			flag = 1;
		for (int i = 0; i < graph[u].size(); i++)
		{
			int v = graph[u][i];
			if (check[v] == 0)
			{
				q.push(v);
				check[v] = flag;
			}
		}
	}
	return (0);
}

int check_bipartite(int V)
{
	for (int i = 1; i <= V; i++)
	{
		for (int j = 0; j < graph[i].size(); j++)
		{
			int tmp = graph[i][j];
			if (check[i] == check[tmp])
				return (-1);
		}
	}
	return (0);
}

int main(void)
{
	int K, V, E;
	cin >> K;

	while (K--)
	{
		cin >> V >> E;
		while (E--)
		{
			int u, v;
			cin >> u >> v;
			graph[u].push_back(v);
			graph[v].push_back(u);
		}
		for (int i = 1; i <= V; i++)
		{
			if (check[i] == 0)
			{
				bfs(1, i);
			}
		}
		int ret = check_bipartite(V);
		if (ret == -1)
			cout << "NO\n";
		else
			cout << "YES\n";
		for (int i = 0; i <= V; i++)
			graph[i].clear();
		for (int i = 0; i <= 20000; i++)
			check[i] = 0;
	}
}
