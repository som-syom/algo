function count_zero(s) {
    var res = s.match(/0/g);
    if (res === null)
        return 0;
    return res.length;
}

function solution(s) {
    var b = 0;
    var zero = 0;

    while (s !== '1') {
        zero += count_zero(s);
        s = s.replace(/0/g,'');
        s = s.length.toString(2);
        b++;
    }

    return [b, zero];
}