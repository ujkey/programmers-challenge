function solution(my_string, n) {
    var answer = '';
    // answer = my_string.slice(my_string.length - n);
    answer = my_string.slice(-1 * n);

    return answer;
}