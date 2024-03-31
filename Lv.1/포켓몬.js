// 해시 > 포켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const frequency = {};
  let maxTypes = 0;

  for (const type of nums) {
    frequency[type] = (frequency[type] || 0) + 1;
  }

  for (const key in frequency) {
    if (frequency[key] > 0) {
      maxTypes++;
    }
  }

  return Math.min(maxTypes, nums.length / 2);
}
