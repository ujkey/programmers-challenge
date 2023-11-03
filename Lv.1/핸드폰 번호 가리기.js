function solution(phone_number) {
    // return '*'.repeat(phone_number.length-4) + phone_number.slice(-4);

    // 정규표현식
    return phone_number.replace(/\d(?=\d{4})/g, '*');
}