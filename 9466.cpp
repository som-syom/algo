/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   9466.cpp                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dhyeon <dhyeon@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/03 09:07:09 by dhyeon            #+#    #+#             */
/*   Updated: 2021/04/03 07:25:11 by dhyeon           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <iostream>
using namespace std;

int arr[100001];
int inde[100001];
bool visited[100001];
int ret;

void check_team(int a)
{
	visited[a] = true;
	inde[arr[a]]--;
	ret++;
	if (inde[arr[a]] == 0)
		check_team(arr[a]);
}

int main(void)
{
	int T;
	cin >> T;
	while (T--)
	{
		int n;
		cin >> n;
		for (int i = 1; i <= n; i++) // 입력받기 - indegree
		{
			cin >> arr[i];
			inde[arr[i]]++;
		}
		ret = 0;
		for (int i = 1; i <= n; i++)
		{
			if (inde[i] == 0 && visited[i] == false)
				check_team(i);
		}
		cout << ret << '\n';

		for(int i = 0; i <= n; i++)
		{
			arr[i] = 0;
			visited[i] = false;
			inde[i] = 0;
		}
	}
}
