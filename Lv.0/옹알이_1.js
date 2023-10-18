/*
    * 채점 결과
    * 정확성: 82.4
    * 합계: 82.4 / 100.0
* */
function solution(babbling) {
    var answer = 0;
    const words = ["aya", "ye", "woo", "ma"];

    babbling.map((b) => {
        let arr = [...b];
        words.map((w) => {
            let idx = b.indexOf(w);
            if(idx !== -1) {
                arr.splice(idx, w.length);
                b = arr.join('');
                if(!b.length) answer++;
            }
        })
    })
    return answer;
}