function solution(arr, delete_list) {
    // arr, delete_list: number[]
    var answer = [];

    answer = arr.filter(num => !delete_list.includes(num));

    return answer;
}