// 깊이/너비 우선 탐색(DFS/BFS) > 아이템 줍기
// https://school.programmers.co.kr/learn/courses/30/lessons/87694
// not solved yet

// 두 점 사이의 거리를 계산
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 두 선분 사이의 최단 거리를 계산
function shortestDistance(segments, characterX, characterY, itemX, itemY) {
  let minDistance = Number.MAX_SAFE_INTEGER;
  for (let segment of segments) {
    let [x1, y1, x2, y2] = segment;

    // character와 item 사이의 거리를 계산
    let dist = distance(characterX, characterY, itemX, itemY);
    minDistance = Math.min(minDistance, dist);
  }
  return minDistance;
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
  let segments = []; // 각 직사각형의 경계를 표현하는 선분 정보를 저장할 배열

  // 각 직사각형을 순회하며 선분 정보를 추출하여 segments 배열에 저장
  for (let i = 0; i < rectangle.length; i++) {
    let rect = rectangle[i];
    let x1 = rect[0],
      y1 = rect[1],
      x2 = rect[2],
      y2 = rect[3];

    // 직사각형의 네 변을 선분으로 저장
    segments.push([x1, y1, x2, y1]); // bottom
    segments.push([x2, y1, x2, y2]); // right
    segments.push([x1, y2, x2, y2]); // top
    segments.push([x1, y1, x1, y2]); // left
  }

  // character와 item의 좌표를 선분 배열에 추가
  segments.push([characterX, characterY, characterX, characterY]);
  segments.push([itemX, itemY, itemX, itemY]);

  // character에서 item까지의 최단 거리를 계산
  return shortestDistance(segments, characterX, characterY, itemX, itemY);
}
