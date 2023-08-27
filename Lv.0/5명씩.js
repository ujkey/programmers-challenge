function solution(names) {
    var answer = [];
    answer = names.filter((_, idx) => idx%5 ==0);

    return answer;
}