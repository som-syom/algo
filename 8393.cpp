#include <iostream>
using namespace std;

int main(void){
    int n, sum;
    cin >> n;
	sum = 0;
    while (n){
        sum += n;
		n--;
    }
    cout << sum << "\n";
}
