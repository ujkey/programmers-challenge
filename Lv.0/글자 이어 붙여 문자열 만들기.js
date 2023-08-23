function solution(my_string, index_list) {
    // index_list : number[]
    var answer = '';
    answer = index_list.map((item) => my_string[item]).join('');

    return answer;
}