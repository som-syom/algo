const makeInMsg = (name) => {
    return `${name}님이 들어왔습니다.`;
}
const makeOutMsg = (name) => {
    return `${name}님이 나갔습니다.`;
}

function solution(record) {
    var answer = [];
    const users = new Map();
    const arr = [];
    
    
    for (let i = 0; i < record.length; i++) {
        const [stat, id, name] = record[i].split(' ');
        
        if (stat === 'Enter') {
            users.set(id, name);
            arr.push([id, 'in']);
        } else if (stat === 'Leave') {
            arr.push([id, 'out']);
        } else if (stat === 'Change') {
            users.set(id, name);
        }
    }
    
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i][1] === 'in') {
            answer.push(makeInMsg(users.get(arr[i][0])));
        } else {
            answer.push(makeOutMsg(users.get(arr[i][0])));
        }
    }
    
    return answer;
}