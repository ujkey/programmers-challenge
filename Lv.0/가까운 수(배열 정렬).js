/*
    [배열 정렬]
    Array.prototype.sortt(compareFunction)
        - 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
        - 기본적으로 오름차순으로 정렬
        - 배열 요소를 문자열로 캐스팅하고 변환된 문자열을 비교하여 순서를 결정
        - 숫자 배열 올바르게 정렬하기
            - array.sort((a, b) => a-b)
                - a>b 양수를 반환 : ba
                - a<b 음수를 반환 : ab
                - a==b 0을 반환 : 정렬 유지
*/

function solution(array, n) {
    /*
        가장 가까운 수가 여러 개일 경우 더 작은 수를 return -> 원본 배열을 오름차순 정렬해서 앞에서부터 인덱스 탐색하여 해결
        var answer = 0;

        const sorted = array.sort((a, b) => a-b);
        const arr = sorted.map((v) => Math.abs(n-v));

        const idx = arr.indexOf(Math.min(...arr));
        answer = array[idx];

        return answer;
    */

    // [3, 10, 28], n=20 --> [ 28, 10, 3 ]
    array.sort((a, b) => Math.abs(n-a) - Math.abs(n-b) || a-b);
    // console.log(array);

    return array[0];
}