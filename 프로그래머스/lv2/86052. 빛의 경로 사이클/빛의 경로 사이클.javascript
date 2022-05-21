const E = [0, 1],
	W = [0, -1],
	S = [1, 0],
	N = [-1, 0];

const dir = [E, S, W, N];

function solution(grid) {
	var answer = [];
	let visited = Array(grid.length);
	for (let i = 0; i < grid.length; i++) {
		visited[i] = Array(grid[0].length);
		for (let j = 0; j < grid[0].length; j++) {
			visited[i][j] = ([0, 0, 0, 0]);
		}
	}
    
	const findDir = (k, prev, dir) => {
		if (dir === 'S') {
			return k;
		} else if (prev.toString() === E.toString() || prev.toString() === S.toString()) {
			if (dir === 'L') return (k - 1 < 0 ? 3 : k - 1);
			else return (k + 1 > 3 ? 0 : k + 1);
		} else {
			if (dir === 'R') return (k + 1 > 3 ? 0 : k + 1);
			else return (k - 1 < 0 ? 3 : k - 1);
		}
	}

	const checkCycle = (y, x, k, cur) => {
		let cnt = 0;
        
		while (visited[y][x][k] === 0) {
			visited[y][x][k] = 1;
			const next = findDir(k, dir[k], grid[y][x]);
			y += dir[next][0];
			if (y < 0) y = grid.length - 1;
			else if (y > grid.length - 1) y = 0;
			x += dir[next][1];
			if (x < 0) x = grid[0].length - 1;
			else if (x > grid[0].length - 1) x = 0;
			k = next;
			cnt++;
		}
		return cnt;
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			for (let k = 0; k < 4; k++) {
				if (visited[i][j][k] === 0) {
					const cnt = checkCycle(i, j, k, dir[k]);
					if (cnt > 0) answer.push(cnt);
				}
			}
		}
	}

	return answer.sort((a, b) => a - b);
}