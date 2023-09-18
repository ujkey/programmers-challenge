function solution(my_string) {
    var answer = [];

    [...my_string].map((_, i) => answer.push(my_string.slice(i)));

    return answer.sort();
}