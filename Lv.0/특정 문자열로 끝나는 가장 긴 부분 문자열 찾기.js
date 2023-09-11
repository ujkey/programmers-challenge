function solution(myString, pat) {
    var answer = '';

    // answer = myString.slice(0, myString.lastIndexOf(pat)+pat.length);
    answer = myString.substring(0, myString.lastIndexOf(pat)) + pat;

    return answer;
}