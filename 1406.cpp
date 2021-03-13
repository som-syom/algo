#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main(void) {
	string str;
	stack<char> s1, s2;
	int T;

	cin >> str >> T;
	int len = str.length();
	int i = -1;
	while (len > ++i){
		s1.push(str[i]);
	}
	while (T--) {
		char a, b;
		cin >> a;
		if (a == 'L'){
			if (s1.empty() == false) {
				s2.push(s1.top());
				s1.pop();
			}
		}else if (a == 'D'){
			if (s2.empty() == false) {
				s1.push(s2.top());
				s2.pop();
			}
		}else if (a == 'B'){
			if (s1.empty() == false) {
				s1.pop();
			}
		}else if (a == 'P'){
			cin >> b;
			s1.push(b);
		}
	}
	while (s1.empty() == false) {
		s2.push(s1.top());
		s1.pop();
	}
	while (s2.empty() == false) {
		cout << s2.top();
		s2.pop();
	}
	cout << endl;
}
