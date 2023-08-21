function solution(array, height) {
    // array : number[]
    let answer = 0;
    answer = array.filter((item) => height < item).length;

    return answer;
}