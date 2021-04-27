#include <iostream>
#include <string>
using namespace std;

int main()
{
    cin.tie(NULL);
    ios::sync_with_stdio(false);
    string s;
    int N;

    cin >> s >> N;
    int len = s.length();
    int i = 0, res = 0;
    while (i < len)
    {
        if ('A' <= s[i] && s[i] <= 'Z')
            res = (res * N) + (s[i] - 55);
        else
            res = (res * N) + (s[i] - 48);
        i++;
    }
    cout << res << '\n';
}