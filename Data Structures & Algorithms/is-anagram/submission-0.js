class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let seenS = new Map()
        let seenT = new Map()
        if (s.length != t.length) {
            return false;
        }
        else{
            for(let i = 0; i<s.length;i++){
                seenS.set(s.charAt(i), (seenS.get(s.charAt(i)) || 0) + 1)
                seenT.set(t.charAt(i), (seenT.get(t.charAt(i)) || 0) + 1)
            }
            for (let [key, val] of seenS) {
                if (seenT.get(key) !== val) return false;
            }
            return true
        }
    }
}
