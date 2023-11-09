function solution(s) {
    // sort()는 유니코드 순으로 정렬
    return [...s].sort().reverse().join('');
}