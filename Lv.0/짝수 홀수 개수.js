function solution(num_list) {
    // num_list : number[]
    var answer = [0, 0]; //[짝수의 개수(even), 홀수의 개수(odd)]
    num_list.map(num => num%2 == 0 ? ++answer[0] : ++answer[1])
    return answer;
}