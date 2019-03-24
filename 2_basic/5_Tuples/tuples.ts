{
    // Basic Tuple
    type DayOfWeek = [number, string];

    const monday: DayOfWeek = [0, 'Monday'];
}

{
    // The order of types matters ([number, string] can't be assigned [string, number]);
    type DayOfWeek = [number, string];

    // const tuesday: DayOfWeek = ['Tuesday', 1]; // Type 'string' is not assignable to 'number'
}

function getMinMax(...nums): [number, number] {
    const minMax: [number, number] = [nums[0], nums[0]];

    nums.forEach(num => {
        if (num < minMax[0]) {
            minMax[0] = num;
        }

        if (num > minMax[1]) {
            minMax[1] = num;
        }
    })

    return minMax;
}

console.table(getMinMax(18,2,3,99,4,1,5,6,7,7)); // [1, 99]

// Tuples aren't limited to 'two'
function getMinMaxAverage(...nums): [number, number, number] {
    const average = nums.reduce((acc, val) => acc = (acc + val)) / nums.length;
    const minMax: [number, number, number] = [nums[0], nums[0], average];

    nums.forEach(num => {
        if (num < minMax[0]) {
            minMax[0] = num;
        }

        if (num > minMax[1]) {
            minMax[1] = num;
        }
    })

    return minMax;
}

console.table(getMinMaxAverage(18,2,3,99,4,1,5,6,7,7)); // [1, 99, 15.2]
