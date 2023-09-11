function solution(myString, pat) {
    var answer = 0;

    // [...myString].map((v, i) => myString.substr(i, pat.length) === pat && ++answer);

    // 정규표현식 리팩토링: 전방탐색
    const reg = new RegExp(`(?=${pat})`, 'g');
    answer = myString.match(reg)?.length || 0;

    return answer;
}