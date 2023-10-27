function solution(score) {
    /*
        const avg = score.map(([en, math]) => (en+math)/2);
        let rank = Array(score.length).fill(1);

        avg.forEach((a, i) => {
            rank.forEach((r, j) => {
                if(a < avg[j]) rank[i]++;
            })
        })

        return rank;
    */

    let avg = score.map(v => (v[0]+v[1])/2);
    let sorted = avg.slice().sort((a,b)=>b-a);

    return avg.map(v => sorted.indexOf(v)+1);
}