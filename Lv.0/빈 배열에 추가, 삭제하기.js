function solution(arr, flag) {
    var answer = [];

    /*
        flag.map((v, i) => {
            if(v) {
                answer.push(...Array.from({length: arr[i]*2}, () => arr[i]))
            } else {
                answer.splice(-arr[i], arr[i]);
            }
        })
    */

    // reduce 활용
    answer = arr.reduce((acc, cur, i) => flag[i] ? [...acc, ...new Array(cur*2).fill(cur)] : acc.slice(0, -cur), []);

    return answer;
}