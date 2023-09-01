function solution(age) {
    var answer = '';

    /*
        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
        answer += [...String(age)].map((str) => chars[str]).join('');
    */

    // 문자열 자체로 인덱스 접근하여 리팩토링
    answer = age.toString().split('').map((v) => 'abcdefghij'[v]).join('');

    return answer;
}