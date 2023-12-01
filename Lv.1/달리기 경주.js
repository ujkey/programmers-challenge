/*
    1차
    채점 결과
    정확성: 75.0
    합계: 75.0 / 100.0
*/
function solution(players, callings) {
    callings.forEach((v) => {
        const idx = players.indexOf(v);
        [players[idx-1], players[idx]] = [players[idx], players[idx-1]]
    })

    return players
}