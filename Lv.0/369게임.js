/*
    [정규표현식(RegExp)]
    메소드 str.match()
        - 정규 표현식과 일치하는 항목이 없으면 match 메서드는 null을 반환
*/

function solution(order) {
    var answer = 0;

    answer = String(order).match(/[369]/g);
    if(answer == null) return 0; //예외처리 : 문자열에 일치하는 항목이 없는 경우 match 메서드는 빈 배열이 아닌 null을 반환한다

    return answer.length;
}