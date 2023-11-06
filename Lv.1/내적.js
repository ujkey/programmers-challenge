// 배열의 곱셈
function solution(a, b) {
    return a.reduce((acc, cur, i) => acc+=a[i]*b[i], 0)
}