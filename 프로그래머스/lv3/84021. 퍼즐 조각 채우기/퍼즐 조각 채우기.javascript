const vx = [-1, 1, 0, 0];
const vy = [0, 0, -1, 1];

function solution(game_board, table) {
    var answer = 0;
    const len = game_board.length;
    
    const checkBlock = (flag, arr) => {
        const list = [];
        const visited = Array.from(Array(len), () => Array(len).fill(0))
        
        const bfs = (y, x) => {
            const queue = [[y, x]];
            let cnt = 0;
            const start = [y, x];
            let max = [y, x];
            let min = [y, x]
            
            while (queue.length) {
                const [curY, curX] = queue.shift();
                
                for (let i = 0; i < 4; i++) {
                    const nx = curX + vx[i];
                    const ny = curY + vy[i];
                    
                    if (ny >= 0 && ny < len && nx >= 0 && nx < len
                        && arr[ny][nx] === flag && !visited[ny][nx]) {
                        queue.push([ny, nx]);
                        cnt++;
                        visited[ny][nx] = 1;
                        max[0] = Math.max(max[0], ny);
                        max[1] = Math.max(max[1], nx);
                        min[0] = Math.min(min[0], ny);
                        min[1] = Math.min(min[1], nx);
                    }
                }
            }
            return [min, max, cnt === 0? 1: cnt];
        }
        
        const copyBlock = (min, max) => {
            const newArr = Array.from(Array(max[0] - min[0] + 1), () => Array(max[1] - min[1] + 1).fill(Math.abs(flag - 1)));
            for (let i = 0; i < max[0] - min[0] + 1; i++) {
                for (let j = 0; j < max[1] - min[1] + 1; j++) {
                    newArr[i][j] = arr[i + min[0]][j + min[1]];
                }
            }
            return newArr;
        }
        
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (!visited[i][j] && arr[i][j] === flag) {
                    const [min, max, cnt] = bfs(i, j);
                    // console.log(i, j, min, max, cnt);
                    // console.log(copyBlock(min, max))
                    list.push({
                        arr: copyBlock(min, max),
                        cnt,
                    })
                    
                }
            }
        }
        // console.log(list)
        return list.sort((a, b) => b.cnt - a.cnt);
    }
    
    function rotateBox(box) {
        const ylen = box.length - 1;
        const xlen = box[0].length - 1;

        const new_box = Array.from(Array(xlen + 1), () => Array(ylen + 1).fill(0));

        for (let i = 0, x = ylen; i < box.length; i++, x--) {
            for (let j = 0, y = 0; j < box[i].length; j++, y++) {
                // console.log(i, j, y, x)
                new_box[y][x] = box[i][j];
            }
        }

      return new_box;
    }
    
    const checkSameShape = (e, b) => {
        let flag = true;
        
        for (let k = 0; k < 4; k++) {
            if (k !== 0) {
                b = rotateBox(b);
            }
            if (b.length === e.length && b[0].length === e[0].length) {
                for (let i = 0; i < e.length; i++) {
                    for (let j = 0; j < e[0].length; j++) {
                        if (e[i][j] === b[i][j]) {
                            flag = false
                            break;
                        }
                    }
                }
                if (!flag) {
                    flag = true;
                } else {
                    return true
                }
            }
        }
        return false;
    }
    
    const block = checkBlock(1, table);
    const empty = checkBlock(0, game_board);
    const usedB = Array(block.length).fill(0);
    const usedE = Array(empty.length).fill(0);
    
    for (let i = 0; i < empty.length; i++) {
        for (let j = 0; j < block.length; j++) {
            if (!usedB[j] && !usedE[i] && empty[i].cnt === block[j].cnt) {
                if (checkSameShape(empty[i].arr, block[j].arr)) {
                    answer += empty[i].cnt;
                    usedB[j] = 1;
                    usedE[i] = 1;
                }
            }
        }
    }
    // console.log(used)
    return answer;
}