function solution(num_list) {
    var answer = 0;

    /*
        num_list.map((v, i) => {
            while(v > 1) {
                if(!v%2) {
                    v = v/2;
                    ++answer;
                } else {
                    v = (v-1)/2;
                    ++answer;
                }
            }
        });
    */

    answer = num_list.map((v) => v.toString(2).length -1).reduce((acc, cur) => acc+cur);

    return answer;
}