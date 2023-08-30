function solution(cipher, code) {
    var answer = '';
    answer = [...cipher].filter((_, idx) => (idx+1)%code == 0).join('');

    return answer;
}