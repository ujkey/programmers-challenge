/*
    진수 변환
        1. Object.prototype.toString()
            - 10진수 --> n진수
            - 10진수.toString(n) : 2 <= n <-36
        2. 전역함수 parseInt(string, radix)
            - n진수 --> n진수
            - parseInt(n진수 문자열, n);
*/

function solution(bin1, bin2) {
    var answer = '';

    answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

    return answer;
}