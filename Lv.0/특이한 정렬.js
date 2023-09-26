// function solution(numlist, n) {
//     var answer = [];
//
//     answer = numlist.sort(function(v1, v2) {
//         const a = Math.abs(v1-n);
//         const b = Math.abs(v2-n);
//
//         if(a < b) return -1;
//         if(a == b) return -1; // 거리가 같다면 더 큰 수를 앞에 오도록 배치
//     })
//
//     return answer;
// }

// 미해결
function solution(numlist, n) {
    var answer = [];

    answer = numlist.sort(function(v1, v2) {
        const a = Math.abs(n-v1);
        const b = Math.abs(n-v2);

        if(a > b) return 1;
        if(a === b) return -1;
        if(a < b) return -1;

    })
    return answer;
}