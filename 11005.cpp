#include <iostream>
#include <vector>
using namespace std;

int main(void)
{
    int N, B, res;
    vector<int> v;

    cin >> N >> B;
    while (N != 0)
    {
        v.push_back(N % B);
        N /= B;
    }
    for(auto iter = v.rbegin(); iter != v.rend(); iter++)
    {
        if (*iter >= 10)
        {
            char c = *iter - 10 + 'A';
            cout << c;
        }
        else
            cout << *iter;
    }
}