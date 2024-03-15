// 깊이, 너비 우선 탐색(DFS/BFS) >
// https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
    // numbers : number[]
    let answer = 0; // 정수를 조합(+,-)하여 target 넘버를 만들 수 있는 방법의 수
    const n = numbers.length; // 최대 깊이

    const DFS = (L, sum) => {
        // L : 깊이, sum : 조합의 결과
        if(L === n) { // 최대 깊이에 도달한 경우
            if(sum === target) answer++;
            return;
        }

        DFS(L+1, sum+numbers[L]);
        DFS(L+1, sum-numbers[L]);
    }

    DFS(0,0);

    return answer;
}

