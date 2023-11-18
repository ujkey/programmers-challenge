function solution(n) {
    // return [...n+''].reverse().map((v) => v*1);

    // 숫자풀이
    let arr = [];
    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while(n>0);

    return arr;
}