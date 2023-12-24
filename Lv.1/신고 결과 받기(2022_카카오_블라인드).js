/*
    [신고 결과 받기] https://school.programmers.co.kr/learn/courses/30/lessons/92334
    id_list : 유저 ID 배열
    report : 유저가 신고한 id 정보 배열
    k : 정지 기준이 되는 신고 횟수
*/

// 1차
function solutionA(id_list, report, k) {
    const answer = [];

    // 1) report의 중복 값을 제거한다.
    report = [...new Set(report)];

    // 2) 신고 받은 횟수를 저장할 객체
    const report_obj = {};
    id_list.forEach((e) => {
        report_obj[e] = 0;
    });

    // 3. 유저별 신고 누적 횟수를 저장
    report.forEach((v) => {
        const [id, value] = v.split(' ');
        report_obj[value] += 1; // 유저별 신고 받은 횟수 계산
    });

    // 4. 신고 누적 횟수에 따른 메일 보내기 위한 객체
    const mail_obj = {};
    report.forEach((v) => {
        const [id, value] = v.split(' ');

        // 5) report를 순회하면서 k이상인 것들만 신고한 id를 mail_obj에 저장
        if (report_obj[value] >= k) { // 신고 받은 횟수가 k 이상일 때 메일 받기
            if (!mail_obj[id]) {
                mail_obj[id] = 0;
            }
            mail_obj[id] += 1;
        }
    });

    // 6) id_list를 순회하면서 값이 있으면 push 없으면 0을 넣고 push
    id_list.forEach((id) => {
        answer.push(mail_obj[id] || 0);
    });


    return answer;
}

// 2차
function solutionB(id_list, report, k) {
    // 동일한 유저에 대한 신고 횟수는 1회로 처리된다
    const reports = [...new Set(report)].map((a) => a.split(' '));
    console.log('reports', reports);

    // 1. 아이디별 신고당한 횟수
    const counted = new Map();
    reports.forEach((_report) => {
        counted.set(_report[1], (counted.get(_report[1])+1) || 1);
    })
    console.log('counted', counted);

    // 2. 처리 결과 메일을 받은 횟수(k번 이상 신고당하면 이용 정지)
    const mail = new Map();
    // k번이상 신고받았는지 확인
    reports.forEach((_report) => {
        if(counted.get(_report[1]) >= k) {
            mail.set(_report[0], (mail.get(_report[0])+1) || 1);
        }
    })
    console.log('mail', mail);

    const answer = id_list.map((id) => mail.get(id) || 0);
    return answer;
}