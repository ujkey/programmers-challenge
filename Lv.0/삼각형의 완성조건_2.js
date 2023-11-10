function solution(sides) {
    const max = sides[0] + sides[1];
    const min = Math.abs(sides[0] - sides[1]);

    return max-min-1;
}