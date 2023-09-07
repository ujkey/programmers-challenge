function solution(my_string) {
    var answer = 0;

    answer = my_string.split(/\D/).reduce((acc, cur) => acc+(cur*1), 0);

    return answer;
}