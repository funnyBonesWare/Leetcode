/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //solution
    if (nums.length === 0) return 0; // Edge case: empty array

    let k = 0; // Slow pointer to track unique elements

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) { // Found a new unique element
            k++; // Move to the next position
            nums[k] = nums[i]; // Place the unique element at new position
        }
    }
    return k + 1; // Number of unique elements
};