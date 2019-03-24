// Enable strictNullChecks for syntax highlighting

let nums = [1,2,3, undefined];

console.log(nums.reduce((sum, val) => sum += val));

interface Villager {
    name: string;
    address?: {
        street: string;
        city: string;
        state: string;
        zip: string;
    }
}

function printAddress(villager: Villager) {
    console.log(villager.address.city);
}

let hiccup: Villager = {
    name: 'Hiccup'
};

printAddress(hiccup);
