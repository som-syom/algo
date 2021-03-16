#include <iostream>
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
	int T, N;
	cin >> T;
	while (T--)
	{
		cin >> N;
		for (int i = 1; i <= N; i++)
		{
			int u;
			cin >> u;
			graph[i].push_back(u);
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
		for (int i = 1; i <= N; i++)
			graph[i].clear();
		for (int i = 0; i <= 1001; i++)
			visited[i] = false;
	}
}
