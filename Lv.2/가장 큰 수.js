function solution(numbers) {
  numbers = numbers.map(String);

  numbers.sort((a, b) => {
    const order1 = a + b;
    const order2 = b + a;
    return order2 - order1;
  });

  if (numbers[0] === "0") {
    return "0";
  }

  return numbers.join("");
}
