/*
    꼬리 문자열 : 모든 문자열을 순서대로 합친 문자열
*/

function solution(str_list, ex) {
    var answer = '';
    // str_list.map(str => !str.includes(ex) ? answer+=str : str);

    answer = str_list.reduce((acc, cur) => {
        if(cur.includes(ex)) return acc;
        return acc + cur;
    }, '');

    return answer;
}