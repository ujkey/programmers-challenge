// 2차 - 해시 활용
// JS의 Map은 해시 테이블을 더 편리하게 사용할 수 있게끔 도와주는 자료구조
function solutionB(participant, completion) {
    const map = new Map();

    for(let i=0; i<participant.length; i++) {
        const p = participant[i];
        const c = completion[i];

        map.set(p, (map.get(p) || 0) + 1);
        map.set(c, (map.get(c) || 0) - 1); //완주자 제거
    }

    for(let [k, v] of map) {
        if(v>0) return k;
    }

    return false;
}

// 1차 - 정렬 활용
function solutionA(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i=0; i<participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}