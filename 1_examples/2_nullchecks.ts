// Enable strictNullChecks for syntax highlighting

let nums = [1,2,3];

console.log(nums.reduce((sum, val) => sum += val));

interface Resident {
    name: string;
    address?: {
        street: string;
        city: string;
        state: string;
        zip: string;
    }
}

function printAddress(resident: Resident) {
    console.log(resident.address.city);
}

let bob: Resident = {
    name: 'Bob'
};

printAddress(bob);
