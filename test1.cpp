#include <iostream>
#include <string>

int main(void) {
	int T;
	std::cin >> T;

	std::string week[7] = {"MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"};

	for (int i = 0; i < T; i++) {
		std::string input;

		std::cin >> input;
		for (int j = 0; j < 7; j++) {
			if (week[j] == input) {
				int res = (6 - j == 0) ? 7 : 6 - j;
				std::cout << res << "\n";
			}
		}
	}

	return (0);
}