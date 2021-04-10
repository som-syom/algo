#include <iostream>
#include <algorithm>
using namespace std;

int narr[500001];
int N;

int    b_search(int num)
{
    int high = N - 1;
    int low = 0;
    int mid;

    while (low <= high)
    {
        mid = (high + low) / 2;
        if (num == narr[mid])
            return (1);
        else if (num < narr[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return (0);
}

int main(void)
{
    cin.tie(NULL);
    ios::sync_with_stdio(false);
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        cin >> narr[i];
    }

    sort(narr, narr + N);

    int M;
    cin >> M;
    for (int i = 0; i < M; i++)
    {
        int tmp;
        cin >> tmp;
        if (b_search(tmp) == 1)
            cout << "1 ";
        else
            cout << "0 ";
    }

}
