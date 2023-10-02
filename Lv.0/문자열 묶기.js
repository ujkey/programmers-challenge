// Map : JavaScript HashMap 자료형
function solution(strArr) {
    const answer = strArr.reduce((acc, cur) => {
        const length = cur.length;
        acc.set(length, acc.get(length) ? acc.get(length)+1 : 1);
        return acc;
    }, new Map());

    return Math.max(...answer.values());
}