function solution(arr) {
    let stk = [];
    let i = 0;

    while(i < arr.length) {
        if(!stk.length) {
            stk.push(arr[i++]);
        } else {
            stk.slice(-1)[0] < arr[i] ? stk.push(arr[i++]) : stk.pop();
        }
    }

    return stk;
}