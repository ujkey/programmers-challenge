/*
    1. Array.prototype.reverse()
        - 배열의 순서를 반전
*/

function solution(num_list) {
    var answer = [];
    /*
        const length = num_list.length;
        const result = (num_list[length-1] > num_list[length-2])
            ? num_list[length-1] - num_list[length-2]
            : num_list[length-1] * 2;
        answer.push(...num_list, result);
    */

    const [a, b] = [...num_list].reverse();
    answer = [...num_list, a > b ? (a-b) : a*2];

    return answer;
}