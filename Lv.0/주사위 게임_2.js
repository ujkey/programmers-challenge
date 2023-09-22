function solution(a, b, c) {
    var answer = 0;

    /*
        if(a===b && b===c) {
            answer = (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
        } else if(a===b || b===c || a===c) {
            answer = (a + b + c) * (a**2 + b**2 + c**2);
        } else {
            answer = a + b + c;
        }
    */

    //Set 자료구조로 리팩토링하기 : Set이 고유한 값을 가지는 성질을 활용
    const calculate = (inc, n=1) => {
        const [a, b, c] = inc;
        let result = 1;
        for(let i=1; i<=n; i++) {
            result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
        }
        return result;
    }

    const set = new Set([a, b, c]);
    switch(set.size) {
        case 1: return calculate([a, b, c], 3);
        case 2: return calculate([a, b, c], 2);
        case 3: return calculate([a, b, c]);
    }

    return answer;
}

