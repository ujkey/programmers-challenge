/*
unresolved
37.5

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
*/

function frequencisesBy(array) {
    const result = {};
    array.forEach((v) => {
        const key = v;
        result[key] ? (result[key] += 1) : (result[key] = 1);
    });
    return result;
}

function solutionA(array) {
    const obj = frequencisesBy(array);
    const values = Object.values(frequencisesBy(array));
    const mVal = Math.max(...values);
    return (values.filter((v)=> v===mVal).length > 1) ? -1 : Object.keys(obj)[values.indexOf(mVal)]*1;
}

// refactoring
function solutionB(array) {
    let m = new Map();
    for(let v of array) m.set(v, (m.get(v) || 0)+1);
    m = [...m].sort((a,b) => b[1]-a[1]); //DESC
    return m.length===1 || m[0][1] !== m[1][1] ? m[0][0] : -1;
}