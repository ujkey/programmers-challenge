function solution(todo_list, finished) {
    var answer = [];

    // finished.map((item, idx) => !item && answer.push(todo_list[idx]));
    answer = todo_list.filter((_, idx) => !finished[idx]);

    return answer;
}