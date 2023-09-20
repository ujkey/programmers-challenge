// 서로 다른 n개 중 m개를 뽑는 경우의 수
// BigInt형식을 사용해야 balls, share의 숫자 범위를 감당할 수 있음

function solution(balls, share) {
    var answer = 0;

    const factorial = (num) => {
        let result = BigInt(1);
        for(let i = num ; i >= 2; i--) {
            result*=BigInt(i);
        }
        return result;
    }

    answer = ( factorial(balls) / (factorial(balls-share)*factorial(share)) );

    return answer;
}