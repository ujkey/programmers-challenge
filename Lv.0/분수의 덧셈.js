/*
function solution_1(numer1, denom1, numer2, denom2) {
    let numer = numer1*denom2 + numer2*denom1;
    let denom = denom1*denom2;
    let num = 0;

    for(let i = 1; i <= denom; i ++) {
        if(numer%i === 0 && denom%i === 0) num = i;
    }

    return [numer/num, denom/num];
}
*/

function getGCD(a, b) {
    return a%b ? getGCD(b, a%b) : b;
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1*denom2 + numer2*denom1;
    let denom = denom1*denom2;
    let gcd = getGCD(numer, denom);
    return [numer/gcd, denom/gcd]
}

/*
    [최대 공약수]
        - 두 수 A와 B의 공통된 약수 중에 가장 큰 정수
        - 2부터 min(A, B)까지 모든 정수로 나누어 구할 수 있음

        function getGCD(a, b) {
            let gcd = 1;
            for(let i=2; i<Math.min(a,b); i++) {
                if(a%i===0 && b%i===0) gcd = i;
            }
            return gcd;
        }

    [최소 공배수]
        두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수
        lcm을 1부터 시작하여 점차 lcm++하면서 각각 두수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교

        function getLCM(a, b) {
            let lcm = 1;
            while(true) {
                if(lcm%a===0 && lcm%b===0) break;
                lcm++;
            }
            return lcm;
        }
* */