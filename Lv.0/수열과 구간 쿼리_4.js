function solution(arr, queries) {
    /*
        queries.map(([s, e, k]) => {
            for(let i = s; i<=e; i++) {
                if(i%k == 0) arr[i]++;
            }
        })

        return arr;
    */

    // reduce refactoring
    return queries.reduce((acc, [s, e, k]) => {
        for(let i=s; i<=e; i++) {
            if (i%k === 0) acc[i]++;
        }
        return acc;
    }, [...arr]);
}