function solution(my_string, s, e) {
    var answer = '';

    const str = my_string.slice(s, e+1);
    const newStr = [...prev].reverse().join('');

    answer = my_string.replace(str, newStr);

    return answer;
}