// 최대공약수
const getGCD = (a, b) => {
    let gcd = 1;
    for(let i=2; i<Math.max(a, b); i++) {
        if(a%i ===0 && b%i===0) gcd = i;
    }
    return gcd;
}

// 최소 공배수
const getLCM = (a, b) => {
    let lcm = 1;
    while(1) {
        if(lcm%a===0 && lcm%b===0) break;
        lcm++;
    }
    return lcm;
}

function solution(n, m) {
    return [getGCD(n,m), getLCM(n,m)];
}