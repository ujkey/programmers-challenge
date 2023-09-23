function solution(my_str, n) {
    var answer = [];

    /*
        for(let i=0; i<my_str.length; i+=n) {
            answer.push(my_str.substring(i, i+n));
        }
    */

    // 정규표현식으로 리팩토링
    answer = my_str.match(new RegExp(`.{1,${n}}`, 'g')); //1개 이상 n개 이하 개씩 탐색

    return answer;
}