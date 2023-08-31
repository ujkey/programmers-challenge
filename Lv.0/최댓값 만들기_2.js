function solution(numbers) {
    var answer = 0;

    numbers.sort((a, b) => a-b); //ASC
    answer = Math.max(numbers[0]*numbers[1], numbers[numbers.length-2]*numbers[numbers.length-1]);

    return answer;
}