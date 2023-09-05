// 배열의 원소 n개씩 묶기

function solution(my_string, m, c) {
    var answer = '';
    const result = [];

    /*
        for(i = 0; i<my_string.length; i+=m) {
            result.push(my_string.slice(i, i+m));
        }
        result.map((str, i) => answer+=str[c-1]);
    */

    // index%n : 배열을 n개씩 묶기와 같은 효과
    answer = [...my_string].filter((_, idx) => idx%m === c-1).join('');

    return answer;
}