/*
    function solution(A, B) {
        let answer = 0;
        let i = 0;
        let arr = [...A.slice()];

        if(A===B) return 0; // 밀지 않아도 같은 경우
        while(i<A.length) {
            arr = [...arr.pop()].concat(arr); //밀기
            ++answer;

            if(arr.join('')===B) return answer;
            else {
                i++;
                if(answer === A.length) answer = -1;
            }
        }

        return answer;
    }
 */

let solution=(a,b)=>(b+b).indexOf(a);
