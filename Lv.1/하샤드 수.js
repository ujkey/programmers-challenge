function solution(x) {
    //문자형
    const total = [...x+''].reduce((acc, cur) => acc+=(cur*1), 0);
    return !(x%total);

    /*
        [숫자형]

        let num = x;
        let sum = 0;
        do {
            sum+=(num%10);
            x = Math.floor(num/10);
        } while(x>0)
    
        return !(num%sum);
    */
}