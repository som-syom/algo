function calcTime (start, end) {
    const s = start.split(":");
    const e = end.split(":");
    
    let h = e[0] - s[0];
    let m = e[1] - s[1];
    if (m < 0) {
        m += 60;
        h--;
    }
    return h * 60 + m;
}

function solution(fees, records) {
    var answer = [];
    const temp = {};
    const t = {};
    
    // IN, OUT 시간 계산
    for (let i = 0; i < records.length; i++) {
        const [time, number, io] = records[i].split(" ");
        if (io === "IN") {
            if (temp[number]) temp[number].push(time);
            else temp[number] = [time];
        } else {
            const start = temp[number].pop();
            if (t[number]) t[number] += calcTime(start, time);
            else t[number] = calcTime(start, time);
        }
    }
    // OUT 없는 기록 체크
    for (let key in temp) {
        if (temp.hasOwnProperty(key) && temp[key].length > 0) {
            const start = temp[key][0];
            if (t[key]) t[key] += calcTime(start, "23:59");
            else t[key] = calcTime(start, "23:59");
        }
    }
    
    const arr = [];
    
    // 요금 계산
    for (let key in t) {
        if (t.hasOwnProperty(key)) {
            let cost = fees[1];
            if (t[key] > fees[0]) {
                cost += Math.ceil((t[key] - fees[0]) / fees[2]) * fees[3];
            }
            arr.push([key, cost]);
        }
    }
    
    // 정렬
    arr.sort((a, b) => a[0] - b[0]);
    answer = arr.map((e) => e[1]);
    
    return answer;
}