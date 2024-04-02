// 해시
// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const types = new Map();
  let totalCombinations = 1;

  clothes.forEach(([name, type]) => {
    if (!types.has(type)) types.set(type, []);
    types.get(type).push(name);
  });

  types.forEach((clothesOfType) => {
    totalCombinations *= clothesOfType.length + 1;
  });

  return totalCombinations - 1;
}
