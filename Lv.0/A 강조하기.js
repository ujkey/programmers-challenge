function solution(myString) {
    var answer = '';

    // answer = [...myString.toLowerCase()].map((str) => str == 'a' ? "A" : str ).join('');
    answer = myString.toLowerCase().replaceAll('a', 'A');

    return answer;
}