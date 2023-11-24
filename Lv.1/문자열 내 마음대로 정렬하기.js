/*
    [ String.prototype.localeCompare() ]
        - 문자열을 현재 로캘에 맞게 비교하여 정렬 순서를 결정하는 메서드
        - string.localeCompare(compareString[, locales[, options]])
            - 반환값
                - 0: 두 문자열이 같음
                - -1: 현재 문자열이 compareString 보다 앞에 위치함
                - 1: 현재 문자열이 compareString 보다 뒤에 위치함
        EX) 알파벳 순으로 정렬할 때 "apple"이 "banana"보다 앞에 오는 경우, "apple".localeCompare("banana")은 -1을 반환한다.
*/

function solution(strings, n) {
    return strings.sort((a, b) =>  {
        // 정렬 기준이 같은 경우에는 사전순으로 정렬한다
        return a[n] == b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
    });

}