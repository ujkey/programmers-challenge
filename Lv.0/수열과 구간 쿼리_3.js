/*
    1. 배열 프로퍼티 맞교환
    function switchValues(arr, index1, index2) {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    2. map vs forEach
        - 둘 다 배열을 순회하면서 각 요소에 대한 작업을 수행하는 메서드
        - forEach
            - 콜백 함수를 실행하고 아무런 값을 반환하지 않는다
            - 새로운 배열을 생성하지 않고 원본 배열을 변경하고자 할 때 사용
        - map
            - 배열 내의 각 요소에 대한 콜백 함수의 반환값으로 이루어진 새로운 배열을 생성한다
            - 따라서 map을 사용하면 새로운 배열이 생성되고, 원본 배열은 변경되지 않음
            - 따라서 작업을 수행하면서 새로운 배열을 생성하고자 할 때 사용
*/

function solution(arr, queries) {
    queries.forEach(([i, j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    })

    return arr;
}