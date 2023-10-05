function solution(box, n) {
    /*
        var answer = box.reduce((acc,cur) => acc * parseInt(cur/n),1);
        return answer;
    */

    let [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}