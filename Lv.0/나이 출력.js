function solution(age) {
    let answer = 0;
    const today  = new Date();
    const year = today.getFullYear();
    answer = year - Number(age);

    return answer;
}