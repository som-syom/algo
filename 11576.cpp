#include <iostream>
#include <vector>
using namespace std;

int main(void)
{
    cin.tie(NULL);
    ios::sync_with_stdio(false);
    int A, B, m, res = 0;

    cin >> A >> B >> m;
    while (m--)
    {
        int n;
        cin >> n;
        res = (res * A) + n;
    }
    vector<int> v;
    while (res != 0)
    {
        v.push_back(res % B);
        res /= B;
    }
    for(auto iter = v.rbegin(); iter != v.rend(); iter++)
    {
        cout << *iter;
        if ((iter + 1) != v.rend())
            cout << ' ';
    }
    cout << '\n';
}