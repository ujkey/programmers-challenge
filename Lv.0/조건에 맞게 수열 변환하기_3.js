function solution(arr, k) {
    var answer = [];

    answer = arr.map((item) => (k % 2 == 0) ? item+k : item*k );

    return answer;
}