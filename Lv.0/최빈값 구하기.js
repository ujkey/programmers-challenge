// unresolved
// 37.5
function solution(array) {
    var answer = 0; //최빈값 : 가장 자주 나오는 값

    const numbers = array.reduce((acc, v, i) => {
        acc[v] ? ++acc[v] : acc[v] = 1;
        return acc;
    }, {});

    answer = Object.values(numbers).reduce((a, b) => {
        if(a==b) return -1;
        return Math.max(a, b);
    }, 0);

    return answer;
}