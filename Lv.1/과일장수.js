// https://school.programmers.co.kr/learn/courses/30/lessons/135808
function solution(k, m, score) {
    var answer = 0; //과일 장수가 얻을 수 있는 최대 이익

    const sorted = score.sort((a, b) => b-a);

    for(let i=0; i<sorted.length; i+=m) {
        const box = sorted.slice(i, i+m);
        if(box.length===m) {
            answer += (box.length * box.slice(-1)[0]);
        }
    }

    return answer;
}