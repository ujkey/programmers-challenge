function solution(n) {
    const arr = Array.from({length: n}, (_, idx) => idx+1);

    const { even, odd } = arr.reduce( ({even, odd}, cur) => {
        if(n%2 && cur%2) odd += cur;
        if(n%2 == 0 && cur%2 == 0) even += Math.pow(cur, 2);
        return {even, odd};
    }, {even: 0, odd: 0} );

    return even || odd;
}