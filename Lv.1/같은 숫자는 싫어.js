function solution(arr) {
    /*
        return arr.reduce((acc, cur) => {
            if(cur!==acc.slice(-1)[0]) acc.push(cur);
            return acc;
        }, [])
    */

    let answer = [arr[0]];
    for(let i=1; i<arr.length; i++) {
        if(answer[answer.length-1]!==arr[i]) answer.push(arr[i]);
    }
    return answer;
}