function solution(arr, k) {
    /*
        var answer = [];
        arr.map((v, i) => {
            if(answer.length === k) return answer;
            if(answer.indexOf(v) === -1) answer.push(v);
        })

        return answer.length < k ? [...answer, ...Array(k-answer.length).fill(-1)] : answer;
    */

    let answer = new Set(arr);
    return answer.size < k ? [...answer, ...Array(k - answer.size).fill(-1)] : [...answer].slice(0, k);
}