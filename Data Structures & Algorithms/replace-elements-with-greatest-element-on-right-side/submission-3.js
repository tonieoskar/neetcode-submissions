class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let max = 0;
            for (let j = i+1; j <= len; j++) {
                if(arr[j]>max){
                    max = arr[j]
                }
            }
            arr[i] = max;
            if(i == len - 1){
                arr[i] = -1
            }
        }
        return arr
    }
}