/*
    JS Set
        - ES6
        - 순서가 없는 중복되지 않은 데이터의 집합
            - 데이터 중복을 제거하고 유일한 값들을 효과적으로 관리할 수 있다
        - 생성 : new 키워드와 생성자를 사용
            const set = new Set(); // Set(0) {size: 0}
            const numSet = new Set([1, 2, 3]); // Set(3) {1, 2, 3}

    Reference
        - https://www.daleseo.com/js-set/
*/

function solution(my_string) {
    var answer = [];
    /*
        [...my_string].map((str, idx) => !answer.includes(str) && answer.push(str));
        return answer.join('');
    */

    // 1. Set 활용
    return [...new Set(my_string)].join('');

    // 2. filter 활용
    // return [...my_string].filter((str, idx) => my_string.indexOf(str) == idx).join('');
}