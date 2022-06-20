function solution(rectangle, characterX, characterY, itemX, itemY) {
    let map = Array.from(Array(103), () => Array(103).fill(0));

    let rec = rectangle.map((el) =>
        el.map((point) => point * 2)
    );

    rec.forEach(([x1, y1, x2, y2]) => {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                if (j === x1 || j === x2 || i === y1 || i === y2) {
                    if (map[j][i] === 1) {
                        continue;
                    } else {
                        map[j][i] += 1;
                    }
                } else {
                    map[j][i] += 2;
                }
            }
        }
    });

    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const queue = [[characterX, characterY, 0]];
    map[characterX][characterY] += 100;

    while (queue.length) {
        const [x, y, count] = queue.shift();

        if (x === itemX && y === itemY) {
      return count / 2;
        }

        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];

            if (nx >= 0 && nx < 101 && ny >= 0 && ny < 101)
                if (map[nx][ny] === 1) {
                    map[nx][ny] += 100;
                    queue.push([nx, ny, count + 1]);
                }
        }
    }
}