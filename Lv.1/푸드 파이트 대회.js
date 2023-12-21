function solution(food) {
    let answer = '';
    food.forEach((v, i) => {
        if(i!==0) answer+=String(i).repeat(Math.floor(v/2));
    })
    answer += '0' + [...answer].reverse().join('');
    return answer;
}