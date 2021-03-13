#include <iostream>
#include <deque>

using namespace std;

int main(void){
	int T;
	scanf("%d", &T);
	while (T--)
	{
		deque<int>	d;
		char		p[100000];
		int			n, a, err = 0, sign = 1, cnt = 0, i;

		scanf("%s %d [", p, &n);
		scanf("[");
		while (n--)
		{
			scanf("%d", &a);
			d.push_back(a);
			if (n >= 1)
				scanf(",");
		}
		scanf("]");
		i = 0;
		while (p[i] != 0)
		{
			if (p[i] == 'R')
				sign *= -1;
			else if (p[i] == 'D')
			{
				if (d.empty() == true)
				{
					err = 1;
					break ;
				}
				else if (sign > 0)
					d.pop_front();
				else if (sign < 0)
					d.pop_back();
			}
			i++;
		}
		if (err == 1)
			cout << "error\n";
		else
		{
			cout << '[';
			if (sign > 0)
			{
				while (d.empty() == false)
				{
					cout << d.front();
					d.pop_front();
					if (d.empty() == false)
						cout << ",";
				}
			}
			else
			{
				while (d.empty() == false)
				{
					cout << d.back();
					d.pop_back();
					if (d.empty() == false)
						cout << ",";
				}
			}
			cout << "]\n";
		}
	}
}
