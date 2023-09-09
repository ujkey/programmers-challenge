function solution(myStr) {
    var answer = [];

    /*
        result = myStr.split(/[a-c]+/g).filter((v) => v);
        answer = !result.length ?  : result;
    */
    answer = myStr.match(/[^a-c]+/g) || ["EMPTY"];

    return answer;
}