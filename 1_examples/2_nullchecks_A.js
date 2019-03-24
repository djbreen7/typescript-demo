// Enable strictNullChecks for syntax highlighting

let nums = [1,2,3, undefined];

console.log(nums.reduce((sum, val) => sum += val));

// Object may be null

function printAddress(villager) {
    console.log(villager.address.city);
}

let hiccup = {
    name: 'Hiccup',
    address: null
};

printAddress(hiccup);

// Comment out file when done
