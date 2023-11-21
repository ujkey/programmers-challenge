function solution(numbers) {
    const result = [];

    numbers.forEach((n1, idx1) => {
        numbers.forEach((n2, idx2) => {
            if(idx1 !== idx2) result.push(n1+n2);
        })
    })

    const answer = [...new Set(result)].sort((a,b) => a-b);
    return answer;
}