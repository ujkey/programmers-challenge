function solution(d, budget) {
    let answer = 0;
    let total = 0;

    d.sort((a, b) => a - b).forEach((v) => {
        if(total+v<=budget) {
            total+=v;
            answer++;
        }
    });

    return answer;
}