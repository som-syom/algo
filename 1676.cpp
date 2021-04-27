#include <iostream>
using namespace std;

int main()
{
    cin.tie(NULL);
    ios::sync_with_stdio(false);
    int N;
    cin >> N;
    int i = 1, cnt = 0;
    while (i <= N)
    {
        int tmp = i;
        while (tmp % 5 == 0 && tmp != 0)
        {
            cnt++;
            tmp /= 5;
        }
        i++;
    }
    cout << cnt << '\n';
}