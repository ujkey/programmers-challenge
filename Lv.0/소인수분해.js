function solution(num) {
    let answer = [];
    let result = num;
    let i = 2;

    while(result!==1) {
        if(result%i==0) {
            answer.push(i);
            result=result/i;
        } else {
            i++;
        }
    }

    return [...new Set(answer)];
}