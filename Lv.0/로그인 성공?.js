function solution(id_pw, db) {
    /*
        var answer = 'fail';
        const [userId, userPwd] = id_pw;

        db.map(([id, pwd]) => {
            if(userId === id) {
                answer = (userPwd === pwd) ? 'login' : 'wrong pw';
            }
        })

        return answer;
    */

    //Map으로 리팩토링
    const [id, pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}