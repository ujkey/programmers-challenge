// 채점 결과
// 정확성: 75.0
// 합계: 75.0 / 100.0
function solution(polynomial) {
    const { x, y } = polynomial.split(' + ').reduce(({x, y}, cur) => {
        cur.includes('x') ? x+=(+(cur.split('x')[0]) || 1) : y+=(+cur);
        return {x, y};
    }, {x: 0, y: 0});


    return x && y ? `${x}x + ${y}` : (x ? `${x}x` : y+'');
    // if(x && y) {
    //     return
    // } else if(x) {
    //     return `${x}x`;
    // } else {
    //     return `${y}`
    // }
}