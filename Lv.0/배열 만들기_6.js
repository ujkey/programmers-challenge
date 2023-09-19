function solution(arr) {
    let stk = [];

    arr.forEach((x, i) => {
        if(x !== stk.slice(-1)[0]) {
            stk.push(x);
        } else {
            stk.pop();
        }
    })

    return stk.length ? stk : [-1];
}