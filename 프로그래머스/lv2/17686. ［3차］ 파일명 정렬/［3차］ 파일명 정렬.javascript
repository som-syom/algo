const isNum = (c) => {
    return '0' <= c && c <= '9';
}

function solution(files) {
    var answer = [];
    
    const reg = /^[a-zA-Z .-]+|\d{1,5}/g;

    
//     let lists = files.map((el, idx) => {
//         const numIdx = el.split('').findIndex((e) => isNum(e));
//         const tailIdx = el.slice(numIdx).split('').findIndex((e, idx) => !isNum(e) || idx > 4) + numIdx;
//         return {
//         idx: idx, 
//         value: el,
//         head: el.slice(0, numIdx).toUpperCase(),
//         num: +el.slice(numIdx, tailIdx),
//         }
//     });
    
//     lists = lists.sort((a, b) => {
//         if (a.head === b.head && a.num === b.num) {
//             return a.idx - b.idx;
//         } else if (a.head === b.head) {
//             return a.num - b.num;
//         } else {
//             return a.head > b.head ? 1 : -1;
//         }  
//         // return a.head < b.head ? -1 : a.head > b.head ? 1 : a.num < b.num ? -1 : a.num > b.num ? 1 : 0
//     })
    
    // answer = lists.map((el) => el.value);
    // console.log(lists);
    answer = files.sort((a, b) => {
        const matchA = a.match(reg),
              matchB = b.match(reg),
              c = matchA[0].toLowerCase(),// + matchA[1].padStart(5,"0"),
              d = matchB[0].toLowerCase()// + matchB[1].padStart(5,"0")
        return c < d ? -1 : c > d ? 1 : matchA[1] - matchB[1]
    })
    
    return answer;
}