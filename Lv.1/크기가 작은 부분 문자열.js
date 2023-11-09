function solution_A(t, p) {
    return [...t].reduce((acc, _, i) => {
        const target = t.slice(i, i+p.length);
        if(target.length === p.length && target<=p) ++acc;
        return acc;
    },0);
}

function solution_B(t, p) {
    // for roop refactoring
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        const target = t.slice(i, i+p.length);
        if(target<=p) ++count;
    }

    return count;
}