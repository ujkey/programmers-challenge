function solutionA(cards1, cards2, goal) {
    goal.slice().forEach((v, i) => {
        if(cards1.indexOf(v)===0) {
            goal.splice(0, 1);
            cards1.shift();
        }
        else if(cards2.indexOf(v)===0) {
            goal.splice(0, 1)
            cards2.shift();
        }
    })

    return goal.length===0 ? "Yes" : "No";
}

function solutionB(cards1, cards2, goal) {
    for(const card of goal) {
        if(cards1[0]===card) {
            cards1.shift();
        } else if(cards2[0]===card) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes"
}