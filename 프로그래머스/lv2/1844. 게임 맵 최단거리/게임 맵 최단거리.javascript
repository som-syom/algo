function solution(maps) {
    var answer = 0;
    const cx = [1, -1, 0, 0];
    const cy = [0, 0, 1, -1];
    const visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(0))
    
    const bfs = () => {
        const queue = [[0, 0]];
        const cq = [1];
        
        while (queue.length) {
            const [y, x] = queue.shift();
            const count = cq.shift();
            
            if (y === maps.length - 1 && x === maps[0].length - 1) {
                return count;
            }
            
            for (let i = 0; i < 4; i++) {
                const ny = y + cy[i];
                const nx = x + cx[i];
                
                if (nx >= 0 && nx < maps[0].length && ny >= 0 && ny < maps.length
                   && maps[ny][nx] === 1 && visited[ny][nx] === 0) {
                    visited[ny][nx] = 1;
                    queue.push([ny, nx]);
                    cq.push(count + 1);
                }
            }
        }
        return -1;
    }
    
    answer = bfs();
    
    return answer;
}