/*
    문자 정렬
        - 오름차순 : string[].sort();
        - 내림차순 : string[].reverse();

    숫자 정렬
        - 오름차순 : number[].sort((a,b) => a-b);
        - 내림차순 : number[].sort((a,b) => b-a);

    객체 정렬
        - 오름차순 : object.sort((a,b) => return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
        - 내림차순 : object.sort((a,b) => return a.name > b.name ? -1 : (a.name > b.name ? 1 : 0));
*/

function solution(myString) {
    var answer = [];
    // answer = myString.split('x').filter(str => str).sort();
    answer = myString.match(/[^x]+/g).sort(); // 정규표현식 사용하여 리팩토링

    return answer;
}