#include <iostream>
#include <vector>

using namespace std;
vector<int> arr[100001];
int check[100001]; // 0 : unvisited 1: team
int A, flag;

void check_team(int num)
{
	int v = arr[num][0];
	if (check[v] == 1)
		flag = -1;
	else if (A == v)
	{
		flag = 0;
	}
	else
	{
		check[v] = 1;
		check_team(v);
	}
}

void reset_team(int u)
{
	int v = arr[u][0];
	if (check[v] != 0)
	{
		check[v] = 0;
		reset_team(v);
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
			int a;
			cin >> a;
			arr[i].push_back(a);
		}
		int ret = 0;
		for (int i = 1; i <= N; i++)
		{
			if (check[i] != 1)
			{
				A = i;
				check_team(i);
				if (flag == -1)
				{
					ret++;
					reset_team(i);
				}
			}
		}
		cout << ret << '\n';
		for (int i = 1; i <= 100001; i++)
		{
			arr[i].clear();
			check[i] = 0;
		}
	}
}
