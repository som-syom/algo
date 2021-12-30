#include <iostream>
#include <string>
using namespace std;

int N{}, cnt{}, score{};
string a;

void func() {
	cin >> a;
	for (int i = 0; i < a.length(); i++) {
		if (a[i] == 'O') {
			cnt++;
			score += cnt;
		}
		else {
			cnt = 0;
		}
	}
}
int main() {
	cin >> N;
	for (int i = 0; i < N; i++) {
		func();
		cout << score<<"\n";
		score = 0,cnt=0;
	}	
	return 0;
}

