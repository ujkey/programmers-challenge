function solution(n) {
    var answer = [];

    answer = Array.from({length: n}, (_, idx) => idx+1).filter((num) => n%num == 0);

    return answer;
}