function solution(myString) {
    var answer = '';
    answer = [...myString].map((str) => str.toUpperCase()).join('');

    return answer;
}