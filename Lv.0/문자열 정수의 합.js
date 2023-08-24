function solution(num_str) {
    var answer = 0;
    answer = [...num_str].reduce((sum, cur) => sum += Number(cur), 0);

    return answer;
}