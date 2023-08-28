function solution(num_list) {

    const { even, odd } = num_list.reduce( ({even, odd}, cur, idx) => {
        if(idx%2 == 0) even+=cur;
        if(idx%2 != 0) odd+=cur;
        return {even, odd};
    }, {even: 0, odd: 0});

    return Math.max(even, odd);
}