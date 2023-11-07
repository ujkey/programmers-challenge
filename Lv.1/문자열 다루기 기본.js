function solution(s) {
    /*
        if(s.length === 4 || s.length === 6) return !s.match(/[a-z]+/gi)
        else return false;
    */

    // 정규식으로 문자열의 길이 체크하기
    return !!s.match(/^\d{6}$|^\d{4}$/gi);
}