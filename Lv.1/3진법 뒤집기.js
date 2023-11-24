/*
    진수 변환(N진수 > N진수)
        10진수 > N진수 : num.toString(N)
        N진수 > 10진수 : parseInt(num, N)
        N1진수 > N2진수 : parseInt(num, N1).toString(N2)
*/

function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(''), 3);
}