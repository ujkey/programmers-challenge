function solution(arr, queries) {
    queries.map(([s, e]) => arr.splice(s, e-s+1, ...arr.slice(s,e+1).map((v) => v+1)))

    return arr;
}