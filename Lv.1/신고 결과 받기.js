// id_list : 유저 ID 배열
// report : 유저가 신고한 id 정보 배열
// k : 정지 기준이 되는 신고 횟수
function solution(id_list, report, k) {
    var answer = []; //유저별로 처리 결과 메일을 받은 횟수

    // 1. 각 유저별로 신고당한 횟수
    const matching = new Map();
    id_list.forEach(key => matching.set(key, []))

    report.forEach((v) => {
        const [key, value] = v.split(' ');
        matching.set(key, [...matching.get(key), value]);
    })

    console.log(matching);

    // 2. 유저별로 신고당한 횟수
    // 3. 각 유저별로 정지된 아이디

    return answer;
}