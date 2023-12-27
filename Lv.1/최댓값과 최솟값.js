function solutionB(s) {
    const arr = s.split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr)
}

function solutionA(s) {
    const arr = s.split(' ').sort((a, b) => a-b);
    return `${arr[0]} ${arr.slice(-1)[0]}`;
}