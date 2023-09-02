function solution(number) {
    var answer = 0;
    answer = [...number].reduce((acc, cur) => acc+ (cur*1), 0)%9;

    return answer;
}