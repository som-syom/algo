function solution(n, k) {
    var answer = 0;
    
    // const primes = Array(1e6).fill(true);
    // const getPrime = () => {
    //     primes[0] = false;
    //     primes[1] = false;
    //     for (let i = 2; i <= 1e6; i++) {
    //         if (primes[i]) {
    //             for (let j = i * i; j <= 1e6; j += i) {
    //                 primes[j] = false;
    //             }
    //         }
    //     }
    // }
    // getPrime();   
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