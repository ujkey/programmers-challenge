function solution(order) {
    var answer = 0;

    answer = order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0);

    return answer;
}