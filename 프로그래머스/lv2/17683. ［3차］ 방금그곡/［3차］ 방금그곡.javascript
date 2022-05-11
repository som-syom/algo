function solution(m, musicinfos) {
    var answer = '';
    const music = [];
    
    const getMinute = (start, end) => {
        const [startH, startM] = start.split(':');
        const [endH, endM] = end.split(':');
        let hour = endH - startH;
        let minute = endM - startM;
        if (minute < 0) {
            minute += 60;
            hour--;
        }
        return hour * 60 + minute;
    }
    
    const makeMelody = (melody, playTime) => {
        let newStr = '';
        let idx = 0;
        for (let i = 0; i < playTime; i++) {
            const m = melody.slice(idx, idx + 2);
            if (m[1] === '#') {
                newStr += m;
                idx += 2;
            } else {
                newStr += melody[idx];
                idx++;
            }
            idx = idx % melody.length;
        }
        return newStr;
    }
    
    for (let i = 0; i < musicinfos.length; i++) {
        const [start, end, title, melody] = musicinfos[i].split(',');
        const playTime = getMinute(start, end);
        let newMelody = makeMelody(melody, playTime);
        
        music.push([title, newMelody, i]);
    }
    console.log(music)
    const arr = [];
    
    for (let i = 0; i < music.length; i++) {
        const tmp = music[i][1].split(m + '#').filter(e => e !== m + '#').join('');
        if (tmp.includes(m)) {
            arr.push(music[i]);
        }
    }
    
    if (arr.length === 0) {
        answer = "(None)";
    } else {
        arr.sort((a, b) => {
            if (b[1].length === a[1].length) {
                return a[2] - b[2];
            }
            return b[1].length - a[1].length
        });
        console.log(arr)
        answer = arr[0][0];
    }
    return answer;
}