function solution(a, b) {
    var answer = 0;

    /*
        `const A = (a%2 !== 0); // true: 홀, false: 짝
        const B = (b%2 !== 0); // true: 홀, false: 짝

        if(A+B==0) {
            answer = Math.abs(a-b);
        } else if(A+B==1) {
            answer = 2*(a+b);
        } else if(A+B==2) {
            answer = Math.pow(a, 2) + Math.pow(b, 2);
        }
    */

    // 중첩 삼항 연산자로 리팩토링
    const isOdd = (num) => num%2 == 1;

    answer = (isOdd(a) && isOdd(b))
        ? a**2 + b**2
        : (isOdd(a) || isOdd(b))
            ? 2*(a+b)
            : Math.abs(a-b);

    return answer;
}