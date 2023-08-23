function solution(num_list) {
    var answer = 0;

    answer = num_list.reduce((acc, cur) => num_list.length > 10 ? acc+cur : acc*cur);

    return answer;
}