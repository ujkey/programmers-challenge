// 깊이/너비 우선 탐색(DFS/BFS) > 여행경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164
// not resolved yet : 정확성 50.0

function solution(tickets) {
    // tickets: 항공권 정보
    const route = []; // 공항 경로

    // 인접 리스트 만들기
    const adjList = {};
    for (const [from, to] of tickets) {
        if (!adjList[from]) adjList[from] = [];
        adjList[from].push(to);
    }

    // 목적지 기준으로 정렬(오름차순)
    for (const key in adjList) {
        adjList[key].sort();
    }
    // console.log(adjList);

    const DFS = (node) => {
        route.push(node);

        const destination = adjList[node];
        if(destination) {
            while(destination.length) {
                const dest = destination.shift();
                DFS(dest);
            }
        }
    }

    DFS('ICN'); //항상 "ICN" 공항에서 출발

    return route;
}