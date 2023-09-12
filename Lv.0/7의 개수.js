function solution(array) {
    var answer = 0;

    // answer = [...array.join('')].filter((v) => v==='7').length;
    answer = array.join('').split(7).length-1;

    return answer;
}