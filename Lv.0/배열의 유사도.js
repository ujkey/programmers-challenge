function solution(s1, s2) {
    var answer = 0;

    answer = s1.filter((v) => s2.includes(v)).length;

    return answer;
}