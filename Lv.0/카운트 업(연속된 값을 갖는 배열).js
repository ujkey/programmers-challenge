/*
    연속된 값을 갖는 배열을 얻는 방법
        - Array.from({length: size}, (_, idx) => idx + start_num);
*/

function solution(start_num, end_num) {
    var answer = [];
    const size = end_num - start_num + 1;
    answer = Array.from({length: size}, (_, idx) => idx + start_num);

    return answer;
}