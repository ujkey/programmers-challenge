function solution(my_string, letter) {
    var answer = '';
    const arr = my_string.split('');
    arr.filter((item) => item !== letter && (answer += item));

    return answer;
}