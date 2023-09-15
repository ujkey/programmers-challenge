function solution(my_string, queries) {
    /*
        queries.forEach((v) => {
            const arr = [...my_string];
            const [from , to] = v;
            const reversed = arr.slice(from, to+1).reverse().join('');
            arr.splice(from, to-from+1, reversed);
            my_string = arr.join('');
        });
    */

    let str = [...my_string];
    queries.forEach(([start, end]) => {
        const reversed = str.slice(start, end+1).reverse();
        str.splice(start, reversed.length, ...reversed);
    });

    return str.join('');
}