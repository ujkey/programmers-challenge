function solution(dots) {
    var answer = 0;

    dots.sort((a, b) => a[0] - b[0]);
    const a = dots[2][0] - dots[0][0]; // 직사각형의 가로
    const b = dots[1][1] - dots[0][1]; // 직사각형의 높이
    answer = a*b;

    return answer;
}