class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0;
        let j = 0;
        function rec(i, j){
            if(i == s.length){
                return true;
            }
            if(j == t.length){
                return false;
            }
            if(s[i] == t[j]){
                return rec(i+1,j+1)
            }
            else{
                return rec(i, j+1)
            }
        }
        return rec(0,0)
    }
}
