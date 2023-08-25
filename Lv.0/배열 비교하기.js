function solution(arr1, arr2) {
    var answer = 0;

    /*
        if(arr1.length == arr2.length) {
            compare(arr)
            const arr1Sum = arr1.reduce((acc, cur) => acc+=cur);
            const arr2Sum = arr2.reduce((acc, cur) => acc+=cur);
            answer = arr1Sum == arr2Sum ? 0 : (arr1Sum > arr2Sum ? 1 : -1);
        } else if(arr1.length > arr2.length) {
            answer = 1;
        } else {
            answer = -1;
        }
    */

    const compare = (a, b, option='') => {
        if(option == 'sum') {
            a = a.reduce((acc, cur) => acc+=cur);
            b = b.reduce((acc, cur) => acc+=cur);
        }
        return a == b ? 0 : ( a > b ? 1 : -1 );
    }

    answer = arr1.length == arr2.length ? compare(arr1, arr2, 'sum') : compare(arr1.length, arr2.length);

    return answer;
}