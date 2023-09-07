function solution(intStrs, k, s, l) {
    var answer = [];

    /*
        answer = intStrs.reduce((acc, cur) => {
            const v = cur.slice(s, s+l)*1;
            if(k < v) acc.push(v);
            return acc;
        }, []);
    */

    // 길이 l짜리 부분 문자열 배열 생성 --> 조건을 만족하는 배열 필터
    answer = intStrs.map((v) => +v.slice(s, s+l)).filter((v) => v > k);

    return answer;
}