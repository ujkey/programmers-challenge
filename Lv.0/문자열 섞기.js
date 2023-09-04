function solution(str1, str2) {
    var answer = [];
    [...str1].map((_, i) => answer.push(str1[i], str2[i]));

    return answer.join('');
}