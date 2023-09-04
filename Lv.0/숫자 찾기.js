function solution(num, k) {
    var answer = 0;
    answer = String(num).indexOf(k) + 1;

    return answer || -1;
}