function solution(num_list, n) {
    // num_list : number[]
    var answer = [];

    for(let i = 0; i < num_list.length; i+=n) {
        answer.push(num_list[i])
    }


    return answer; //n 간격의 원소들을 담은 배열
}