// Example 1
// Add type annotation to argument
function addNumbers(...nums) {
    console.log(nums.reduce((sum, val) => sum += val, 0));
}

addNumbers(2, 5, 3); // 10
addNumbers(2, 5, '3'); // 253

// Example 2
let isActive = true;
isActive = 'yes';
isActive = 1;

