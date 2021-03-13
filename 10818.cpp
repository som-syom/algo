#include <iostream>
using namespace std;

int main(void){
    int min, max, T, a;
    cin >> T;
    cin >> min;
    max = min;
    T--;
    while (T--)
    {
        cin >> a;
        if (min > a)
            min = a;
        else if (max < a)
            max = a;
    }
    cout << min << " " << max << "\n";
}
