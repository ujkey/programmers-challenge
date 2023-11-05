function solution(n) {
    // return Array.from({length: n}, (_, i) => i+1).map((_, i) => i%2 ? "박" : "수").join('');

    // reapeat 활용
    return "수박".repeat(n).slice(0, n);
}