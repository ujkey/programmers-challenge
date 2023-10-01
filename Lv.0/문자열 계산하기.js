/*
    1. eval(string)
        - 문자로 표현된 JavaScript 코드를 실행하는 함수
        - 악의적인 영향을 받았을 수 있는 문자열을 eval()로 실행한다면, 웹페이지나 확장 프로그램의 권한으로 사용자의 기기에서 악의적인 코드를 수행하는 결과를 초래할 수 있다.

    2. Function 생성자
        - 새 Function 객체를 만든다.
        - new Function ([arg1[, arg2[, ...argN]],] functionBody);
*/

function solution(my_string) {
    // return eval(my_string);
    return (new Function ('return '+my_string))();
}