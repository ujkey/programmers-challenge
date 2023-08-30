function solution(num_list, n) {
    let answer = [];
    // answer.push(...num_list.slice(n), ...num_list.slice(0, n));
    num_list.push(...num_list.splice(0, n));
    answer = num_list;

    return answer;
}