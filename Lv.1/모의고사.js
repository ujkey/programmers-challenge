// 완전탐색 > 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function solution(answers) {
  const supoja1 = [1, 2, 3, 4, 5];
  const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supoja1[i % supoja1.length]) scores[0]++;
    if (answers[i] === supoja2[i % supoja2.length]) scores[1]++;
    if (answers[i] === supoja3[i % supoja3.length]) scores[2]++;
  }

  const maxScore = Math.max(...scores);
  const winners = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) winners.push(i + 1);
  }

  return winners;
}
