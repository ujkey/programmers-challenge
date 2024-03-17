// 깊이/너비 우선 탐색(DFS/BFS) > 단어변환
// https://school.programmers.co.kr/learn/courses/30/lessons/43163?language=javascript
function solution(begin, target, words) {
  // begin -> target으로 변환하는 가장 짧은 변환 과정
  const visited = { [begin]: 0 }; // 방문한 노드를 저장
  const queue = [];

  queue.push(begin);

  // 단어 노드의 연결 여부를 판단
  // 2글자 이상 동일하면 연결된 상태로 판단한다
  const connected = (a, b) => {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
          count++;
          if(count > 1) return false;
      }
    }

    return count === 1;
  };

  while (queue.length) {
    const cur = queue.shift();

    // 종료조건 : target을 찾은 경우
    if (cur === target) break;

    for (const word of words) {
      // 연결된 노드를 찾는다
      if (connected(cur, word) && !visited[word]) {
        // 연결된 노드이면서 처음 방문한 노드인 경우
        visited[word] = visited[cur] + 1;
        queue.push(word);
        // console.log(visited)
      }
    }
  }

  return visited[target] || 0;
}
