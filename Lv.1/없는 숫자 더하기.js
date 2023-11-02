function solution(numbers) {
    return Array.from({length: 10}, (_, i) => i).reduce((acc, cur) => {
        if(!numbers.includes(cur)) acc+=cur;
        return acc;
    }, 0);
}