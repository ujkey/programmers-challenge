function solution(array, commands) {
    var answer = [];

    commands.map((v) => {
        const [i, j, k] = v;
        const arr = array.slice(i-1, j).sort((a,b) => a-b);
        answer.push(arr[k-1]);
    })

    return answer;
}