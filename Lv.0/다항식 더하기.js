/*
    [1차 시도] 히스토리
    채점 결과
    정확성: 75.0
    합계: 75.0 / 100.0
    function solution(polynomial) {
        const { x, y } = polynomial.split(' + ').reduce(({x, y}, cur) => {
            cur.includes('x') ? x+=(+(cur.split('x')[0]) || 1) : y+=(+cur);
            return {x, y};
        }, {x: 0, y: 0});

        if(x && y) {
            return
        } else if(x) {
            return `${x}x`;
        } else {
            return `${y}`
        }
    }
*/

function solution(polynomial) {
    const [ str, num ] = polynomial.split(' + ').reduce(([str, num], cur) => {
        if(cur.includes('x')) return [str+=(+(cur.replace('x', '')) || 1), num];
        return [str, num+=(+cur)];
    }, [0, 0]);

    /*
    if(!str && !num) return '0';
    if(!str) return num+'';

    // case value : 'x + 1'
    const result = `${str===1 ? '' : str}x`;
    if(!num) return result;
    return `${result} + ${num}`
    */

    // 수식 출력 리팩토링
    let answer = [];
    if(str) answer.push(`${str === 1 ? '' : str}x`);
    if(num) answer.push(num);
    return answer.join(' + ');
}