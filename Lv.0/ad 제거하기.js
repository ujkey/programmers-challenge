function solution(strArr) {
    var answer = [];

    // strArr.map((str) => !str.includes('ad') && answer.push(str));
    answer = strArr.filter((str) => str.indexOf('ad') == -1 );

    return answer;
}