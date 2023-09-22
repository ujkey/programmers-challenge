function solution(rsp) {
    // 가위: 2, 바위: 0, 보: 5
    var answer = '';

    const result = { 0: 5, 2: 0, 5: 2 };
    answer = [...rsp].map((v) => result[v]).join('');

    return answer;
}