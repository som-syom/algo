function solution(A, B) {
    var answer = 0;
    B = B.sort((a, b) => +a - +b);
    A = A.sort((a, b) => +a - +b);
    let Ai = 0;
    let Bi = 0;
    
    while (Bi < A.length) {
        if (A[Ai] < B[Bi]) {
            answer++;
            Ai++;
        }
        Bi++;
    }
    
    return answer;
}