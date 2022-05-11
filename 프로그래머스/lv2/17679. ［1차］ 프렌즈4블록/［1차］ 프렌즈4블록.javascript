function solution(m, n, board) {
    var answer = 0;
    for (let i = 0; i < m; i++) {
        board[i] = board[i].split('');
    }
    
    
    const findBlock = () => {
        let flag = true;
        const dup = [];
        for (let i = 0; i < m; i++) {
            dup.push([]);
        }
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (board[i][j] !== '' 
                    && board[i][j] === board[i + 1][j] 
                    && board[i][j] === board[i][j + 1]
                    && board[i][j] === board[i + 1][j + 1]) {
                    flag = false;
                    dup[i][j] = '';
                    dup[i + 1][j] = '';
                    dup[i][j + 1] = '';
                    dup[i + 1][j + 1] = '';
                }
            }
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (dup[i][j] === '') {
                    board[i][j] = '';
                    answer++;
                    flag = false;
                }
            }
        }
        return flag;
    }
    
    const moveBlock = (i, j) => {
        for (let y = i; y >= 0; y--) {
            if (board[y][j] !== '') {
                board[i][j] = board[y][j];
                board[y][j] = '';
                break ;
            }
        }
    }
    
    const checkMap = () => {
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                if (board[i][j] === '') {
                    moveBlock(i, j);
                }
            }
        }
    }
    
    
    while (1) {
        if (findBlock()) {
            break ;
        }
        checkMap()
    }
    
    return answer;
}