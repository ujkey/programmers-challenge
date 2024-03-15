// 깊이, 너비 우선 탐색(DFS/BFS) > 네트워크
// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  // n: 컴퓨터의 개수, computers: 연결 정보
  let answer = 0; // 네트워크의 개수 (a=b, b=c -> a=c)
  const visited = Array.from({ length: n }, () => 0); // 각 컴퓨터 방문 여부 초기화

  // 특정 컴퓨터에서 시작하여, 연결된 모든 컴퓨터를 방문
  const DFS = (i) => {
    visited[i] = 1; // 방문 처리
    for (let j = 0; j < n; j++) {
      // 연결되어 있고, 방문하지 않았다면
      if (computers[i][j] === 1 && !visited[j]) DFS(j);
    }
  };

  // 아직 방문하지 않은 컴퓨터를 발견하면, 해당 컴퓨터를 시작으로 새로운 네트워크를 찾기 위해 DFS 함수를 호출
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);

      // 더이상 방문할 수 없는 경우 네트워크 개수 증가
      answer++;
    }
  }

  return answer;
}
