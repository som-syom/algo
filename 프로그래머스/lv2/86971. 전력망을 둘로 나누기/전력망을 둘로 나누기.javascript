function solution(n, wires) {
    var answer = 1e9;

    const makeTree = (arr) => {
        const t = [];
        for (let i = 0; i < arr.length; i++) {
            const [first, second] = arr[i];
            if (t[first] === undefined) t[first] = [];
            t[first].push(second);
            if (t[second] === undefined) t[second] = [];
            t[second].push(first);
        }
        return t;
    }
    
    for (let i = 0; i < wires.length; i++) {
        const tree = makeTree(wires.filter((_, idx) => idx !== i));
        const visited = Array(n + 1).fill(0);
        const cnt = [];
        
        const bfs = (j) => {
            const queue = [j];
            let count = 0;
            
            while (queue.length) {
                const num = queue.shift();
                if (tree[num] === undefined) return 1;
                const next = tree[num];
                
                for (let k = 0; k < next.length; k++) {
                    if (!visited[next[k]]) {
                        queue.push(next[k]);
                        visited[next[k]] = 1;
                        count++;
                    }
                }
            }
            return count;
        }
        
        for (let j = 1; j <= n; j++) {
            if (!visited[j]) {
                const num = bfs(j);
                cnt.push(num);
            }
        }
        answer = Math.min(answer, Math.abs(cnt[0] - cnt[1]));
    }
    
    return answer;
}