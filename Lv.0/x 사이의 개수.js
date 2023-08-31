function solution(myString) {
    var answer = [];
    answer = myString.split('x').map((str) => str.length);

    return answer;
}