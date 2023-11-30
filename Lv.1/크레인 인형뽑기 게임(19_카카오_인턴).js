// 2차 ------------------------------
function solutionB(board, moves) {
    const basket = [];
    let count = 0; //터트려져 사라진 인형의 개수

    moves.forEach((move, idx) => {
        const columnIndex = move - 1;
        const doll = findDoll(board, columnIndex);

        if(doll.value > 0) {
            const isMatching = checkEqual(doll, basket);
            count += isMatching ? 2 : 0;
            board[doll.row][columnIndex] = 0;
        }
    })
    return count;
}

const findDoll = (board, columnIndex) => {
    for(let i=0; i<board.length; i++) {
        const doll = board[i][columnIndex];
        if(doll!==0) return { row: i, value: doll }
    }
    return { row: -1, value: 0 }
}

const checkEqual = (doll, basket) => {
    const lastDoll = basket[basket.length - 1];
    if (lastDoll === doll.value) {
        basket.pop();
        return true;
    } else {
        basket.push(doll.value);
        return false;
    }
}


// 1차 ------------------------------
function solutionA(board, moves) {
    const basket = [];
    let count = 0;

    moves.forEach((v, idx) => {
        const columnIndex = v - 1;
        const lastDoll = basket.slice(-1)[0];

        for(let i=0; i<board.length; i++) {
            if(board[i][columnIndex] !== 0) {
                const cur = board[i][columnIndex];
                if(cur === lastDoll) {
                    basket.pop();
                    count+=2;
                } else {
                    basket.push(cur);
                }
                board[i][columnIndex] = 0;
                return;
            }
        }
    })

    return count;
}