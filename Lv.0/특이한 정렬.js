function solution(numlist, n) {
    /*
        return numlist.sort((a, b) => {
            const [nA, nB] = [Math.abs(a-n), Math.abs(b-n)];

            // 거리가 같다면 origin value 내림차순 배치
            if(nA === nB) return b-a;
            //diff 값에 따라 오름차순 배치
            return nA-nB;
        })
    */

    //단축평가로 리팩토링 : ASC || DESC
    return numlist.sort((a, b) => Math.abs(a-n) - Math.abs(b-n) || b-a)
}