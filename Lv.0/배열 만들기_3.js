function solution(arr, intervals) {
    var answer = [];

    // intervals.filter((i) => answer.push(...arr.slice(i[0], i[1]+1)));

    const[[a, b], [c, d]] = intervals;
    answer = [...arr.slice(a, b+1), ...arr.slice(c, d+1)];

    return answer;
}