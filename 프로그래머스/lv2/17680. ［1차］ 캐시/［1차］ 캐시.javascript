function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
    if (cacheSize === 0) return cities.length * 5;
    
    for (let i = 0; i < cities.length; i++) {
        const upper = cities[i].toUpperCase();

        if (cache.length === 0) {
            cache.push(upper);
            answer += 5;
        } else {
            if (!cache.includes(upper)) {
                cache.push(upper);
                answer += 5;
                if (cache.length > cacheSize)
                    cache.shift();
            } else {
                cache = cache.filter(el => el !== upper);
                cache.push(upper);
                answer += 1;
            }
        }
    }
    return answer;
}