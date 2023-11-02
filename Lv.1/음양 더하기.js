function solution(absolutes, signs) {
    const total = absolutes.reduce((acc, cur, i) => {
        return acc+=cur*(signs[i] ? 1 : -1)
    }, 0);

    return total;
}