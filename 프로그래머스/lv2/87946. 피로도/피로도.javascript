function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(0);
    let max = 0;
    
    const dfs = (k, cnt) => {
        max = Math.max(max, cnt);
        
        for (let i = 0; i < dungeons.length; i++) {
            const [minP, costP] = dungeons[i];
            
            if (k >= minP && !visited[i]) {
                visited[i] = 1;
                dfs(k - costP, cnt + 1);
                visited[i] = 0;
            }
        }
    }
    
    dfs(k, 0);
    
    return max;
}