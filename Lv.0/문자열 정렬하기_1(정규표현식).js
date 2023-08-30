/*
    정규표현식 활용
        1. 문자 검색(search)
        2. 문자 대체(replace)
        3. 문자 추출(extract)

    reference
        - https://heropy.blog/2018/10/28/regexp/
*/

function solution(my_string) {
    var answer = [];
    // const result = [...my_string].filter((str) => Number.isInteger(+str));
    // answer = result.map(Number).sort((a, b) => a-b);
    answer = my_string.match(/\d/g).sort((a, b) => a - b).map(Number);

    return answer;
}