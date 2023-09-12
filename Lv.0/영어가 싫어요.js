function solution(numbers) {
    var answer = 0;

    /*
        const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        answer = numArr.map((v, i) => numbers = numbers.replaceAll(v, i));
        return answer.pop()*1;
    */

    // replace 의 두번째 인자로 콜백을 활용하여 리팩토링
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };

    answer = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return obj[v]
    });

    return answer*1;
}