function solution(a, b) {
    // return Array.from({length: Math.abs(b-a)+1}, (_, i) => Math.min(a, b)+i).sort().reduce((acc, cur) => acc+cur, 0);
    return (a+b) * (Math.abs(a-b)+1) / 2;
}