#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;
vector<int> graph[1001];
bool visited[1001];

void dfs(int u)
{
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

int main(void)
{
	int N, M;
	cin >> N >> M;

	while (M--)
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

	int ret = 0;
	for (int i = 1; i <= N; i++)
	{
		if (visited[i] == false)
		{
			dfs(i);
			ret++;
		}
	}
	cout << ret << '\n';
}
