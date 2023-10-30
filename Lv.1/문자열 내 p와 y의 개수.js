function solution(s){
    /*
        1. Map 활용
        let m = new Map();
        [...s.toUpperCase()].forEach(v => m.set(v, (m.get(v)||0)+1));

        if(!m.has('P') && !m.has('Y')) return true;
        else return (m.get('P') === m.get('Y')) ? true : false;
    */

    /*
        2. split의 separator로 나누면 리턴되는 배열의 길이는 (일치되는 개수 + 1)
        return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
    */

    // 3. 정규표현식 활용
    return s.match(/p/ig).length === s.match(/y/ig).length;
}