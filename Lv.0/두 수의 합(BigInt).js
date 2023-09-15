/*
    BigInt
        - Number 원시 값이 안정적으로 나타낼 수 있는 최대치보다 큰 정수를 표현할 수 있는 내장 객체
        - BigInt를 사용하면 정수 연산을 수행할 때 정밀도 손실 없이 큰 정수를 다룰 수 있다
        - BigInt를 생성하려면 숫자 끝에 "n"을 붙이거나, BigInt() 생성자 함수를 사용한다
            - const theBiggestInt = 9007199254740991n;
            - const alsoHuge = BigInt(9007199254740991);
*/
function solution(a, b) {
    var answer = '';

    answer = (BigInt(a) + BigInt(b)) + '';

    return answer;
}

