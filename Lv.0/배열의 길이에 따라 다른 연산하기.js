function solution(arr, n) {
    var answer = [];
    // answer = arr.length%2
    //             ? arr.map((item, idx) => !idx%2 ? item+n : item)
    //             : arr.map((item, idx) => idx%2 ? item+n : item) ;

    answer = arr.map((item, idx) => arr.length%2 != idx%2 ? item+n : item);

    return answer;
}