class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = [];
        let len = nums.length;
        for (let i=0;i<len;i++){
            if(seen.includes(nums[i])){
                return true
            }
            else{
                seen.push(nums[i])
            }
        }
        return false 
    }
}
