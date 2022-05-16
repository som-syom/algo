function solution(n, k) {
    var answer = 0;

    const isPrime = (num) => {
        if (!num || num === 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0 )
                return false;
        }
        return true;
    }
        
    const base = n.toString(k);
    const nums = base.split('0').filter(e => e);
    
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(+nums[i]))
            answer++;
    }
    
    return answer;
}