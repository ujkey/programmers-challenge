function solution(code) {
    let mode = 0;
    let ret = '';

    /*
    [...code].map((v, idx) => {
        const isEven = (idx%2 == 0);
        if(mode === 0) {
            v == '1' ? mode = 1 : (isEven ? ret+=v : '');
        } else {
            v == '1' ? mode = 0 : (!isEven ? ret+=v : '');
        }
    })
    */

    [...code].map((v, idx) => {
        const isEven = (idx%2 == 0);
        if(v === '1') {
            mode = +!mode;
        } else if((!mode && isEven) || (mode && !isEven)) {
            ret+=v;
        }
    })

    return ret || "EMPTY";
}