function solution(num_list) {
    var answer = 0;

    /*
        리팩토링 전
        const oddSum = []; //홀수만 순서대로 이어 붙인 수의 합
        const evenSum = []; //짝수만 순서대로 이어 붙인 수의 합

        num_list.map(item => (item%2 == 0) ? evenSum.push(item) : oddSum.push(item));
        answer = Number(evenSum.join('')) + oddSum.join('');
    */

    // 리팩토링 후
    const { even, odd } = num_list.reduce( ({even, odd}, cur) => {
        cur%2 == 0 ? even.push(cur) : odd.push(cur);
        return {even, odd};
    } , {even: [], odd: []} );

    answer = Number(even.join('')) + Number(odd.join(''));

    return answer;
}

