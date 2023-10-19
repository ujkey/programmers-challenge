// [Refactoring] ----------
function frequency(arr) {
    const counter = new Map();
    arr.forEach((num) => counter.set(num, (counter.get(num) || 0) + 1));

    // [DESC] 빈도 기준
    const sortedByCnt = [...counter.keys()].sort((a, b) => counter.get(b) - counter.get(a));
    const maxCnt = Math.max(...counter.values());
    return [sortedByCnt, maxCnt];
}

function solutionB(a, b, c, d) {
    const [arr, maxCnt] = frequency([a,b,c,d]);
    const [p, q, r, s] = arr;

    // 1. 네 주사위의 숫자가 모두 같은 경우
    if(arr.length === 1) return 1111*p;
    // 2. 세 주사위의 숫자가 같고, 나머지 한개의 숫가 다른 경우
    // 3. 주사위가 두개씩 같은 값이 나오는 경우
    if(arr.length === 2) return maxCnt === 2 ? (p+q)*Math.abs(p-q) : (10*p+q)**2;
    // 4. 두 주사위 숫자가 같고, 나머지 두개의 숫자가 다른 경우
    if(arr.length === 3) return q*r;
    // 5. 네 주사위의 숫자가 모두 다른 경우
    return Math.min(...arr);
}

function solutionA(a, b, c, d) {
    const maxValue = Math.max(a,b,c,d);
    const minValue = Math.min(a,b,c,d);
    let maxCount = 0;
    let minCount = 0;
    const arr = [a, b, c, d];

    arr.forEach((v) => {
        if(v===maxValue) maxCount++;
        else if(v===minValue) minCount++;
    })

    // 모두 같은 경우
    if(maxCount===4) return 1111*maxValue;

    // 세 주사위가 같은 경우
    if(maxCount===3) return (10*maxValue+minValue)**2;
    if(minCount===3) return (10*minValue+maxValue)**2;

    // 두 주사위씩 같은 경우
    if(maxCount===2 && minCount===2) return (minValue+maxValue)*Math.abs(minValue-maxValue)

    // 두 주사위가 한 그룹만 같은 경우
    if(a===b){
        return c*d
    }
    if(a===c){
        return b*d
    }
    if(a===d){
        return b*c
    }
    if(b===c){
        return a*d
    }
    if(b===d){
        return a*c
    }
    if(c===d){
        return a*b
    }

    /*
    if(minCount===2) {
        const [x, y] = arr.filter((v) => v!==minValue);
        return x*y;
    }

    if(maxCount===2) {
        const [x, y] = arr.filter((v) => v!==maxValue);
        return x*y;
    }
    */

    // 모두 다른 경우
    return minValue;
}