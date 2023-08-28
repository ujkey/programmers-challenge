function solution(my_strings, parts) {
    var answer = '';

    // my_strings.map((str, idx) => answer+=str.substring(parts[idx][0], parts[idx][1]+1));
    answer = parts.map(([s, e], idx) => my_strings[idx].slice(s, e+1)).join('');

    return answer;
}