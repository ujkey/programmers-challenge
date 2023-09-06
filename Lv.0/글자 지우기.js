function solution(my_string, indices) {
    var answer = '';

    answer = [...my_string].filter((_, idx) => !indices.includes(idx)).join('');

    return answer;
}