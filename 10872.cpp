#include <iostream>
using namespace std;

int main()
{
    int N, res = 1;
    cin >> N;
    while (N)
    {
        res *= N;
        N--;
    }
    cout << res << '\n';
}