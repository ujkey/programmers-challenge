function solution(numLog) {
    var answer = '';

    /*
        numLog.map((v, i) => {
            switch(numLog[i+1]-v) {
                case 1 :
                    answer+='w';
                    break;
                case -1 :
                    answer+='s';
                    break;
                case 10 :
                    answer+='d';
                    break;
                case -10 :
                    answer+='a';
                    break;
            }
        })
    */

    const convert = {
        '1': 'w',
        '-1': 's',
        '10': 'd',
        '-10': 'a'
    };

    answer = numLog.slice(1).map((v, i) => {
        // console.log(v, numLog[i])
        return convert[v-numLog[i]]
    }).join('');

    return answer;
}