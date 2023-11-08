// [for...of와 for...in 비교] https://github.com/ujkey/TIL/blob/main/JavaScript/for%20of%EC%99%80%20for%20in.md
function solution(s) {
    var result = '';

    for(let word of s.split(' ')) {
        console.log(word);
        for(let i in word) {
            // 조건에 따라 함수 호출하기
            result += word[i][i % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
        }
        result += ' ';
    }

    return result.slice(0,-1);
}