function solution(s) {
    const answer = s.length%2 ? [...s].splice(s.length/2, 1) : [...s].splice(s.length/2-1, 2);
    return answer.join('');

    // substr 권장하지 않음
    // return s.substr(Math.ceil(s.length / 2) - 1, s.length%2 ? 1 : 2);
}