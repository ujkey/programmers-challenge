function solution(i, j, k) {
    var answer = 0;

    const arr = Array.from({length: j-i+1}, (_, idx) => (idx+i)).join('');
    answer = [...arr].filter((v) => v==k).length;

    return answer;
}