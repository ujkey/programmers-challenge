function solution(arr) {
    var answer = [];

    /*
        answer = arr.reduce((acc, cur) => {
            if(cur>=50 && cur%2===0) {
                acc.push(cur/2);
            } else if (cur<50 && cur%2!==0) {
                acc.push(cur*2);
            } else {
                acc.push(cur);
            }

            return acc;
        }, [])
    */

    answer = arr.map((v) => (v>=50 && v%2==0) ? v/2 : (v<50 && v%2!==0) ? v*2 : v);

    return answer;
}