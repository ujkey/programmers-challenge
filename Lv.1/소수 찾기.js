function solution(n) {
    return Array.from({length: n}, (_, i) => i+1).filter((v, i) => isPrime(v)).length;
}

// 소수 판별(1과 자기 자신만으로 나누어 떨어지는 양의 정수)
function isPrime(v) {
    // 1 또는 0은 소수가 아님
    if (number < 2) {
        return false;
    }

    // 2 또는 3은 소수
    if (number === 2 || number === 3) {
        return true;
    }

    // 2로 나누어 떨어지는 수는 소수가 아님
    if (number % 2 === 0) {
        return false;
    }

    // 제곱근까지만 반복해서 나누어 봄
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}