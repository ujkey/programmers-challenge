function solution(chicken) {
    var answer = 0;
    let coupon = chicken;

    while(coupon>=10) {
        // 쿠폰으로 치킨 주문
        const serviceChicken = Math.floor(coupon/10);
        // 주문한 서비스 치킨 Count
        answer += serviceChicken;
        // 남은 쿠폰 갯수 + 주문한 서비스 치킨으로 얻은 쿠폰 합쳐서 계산
        coupon = coupon % 10 + serviceChicken;
    }

    return answer;

}