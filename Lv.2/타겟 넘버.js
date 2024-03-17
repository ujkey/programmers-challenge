// 깊이, 너비 우선 탐색(DFS/BFS) >
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// 1. 재귀호출 활용
function solutionA(numbers, target) {
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

// 2. 스택 자료구조 활용
function solutionB(numbers, target) {
    let answer = 0; // 타겟 넘버를 완성한 횟수
    const n = numbers.length; // 최대 깊이

    const stack = [];
    stack.push([0, 0]); // [L, sum]

    while(stack.length) {
        const [curL, curSum] = stack.pop();

        // 종료 조건
        if(curL === n) {
            if(curSum === target) answer++;
            continue;
        }

        stack.push([curL+1, curSum+numbers[curL]]);
        stack.push([curL+1, curSum-numbers[curL]]);
    }

    return answer;
}



