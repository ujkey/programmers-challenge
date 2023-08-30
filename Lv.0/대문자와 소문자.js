function solution(my_string) {
    var answer = '';
    answer = [...my_string].map((item) => item.toUpperCase() == item ? item.toLowerCase() : item.toUpperCase()).join('');

    return answer;
}