// The following function generates an array in between two input numbers:
function arrayInBetween(num1, num2) {
    if (num1 > num2) {
        return [];
    }
const result = [];
for (let yay = num1; yay <= num2;
    yay ++) {
        result.push(yay);
    }
    return result;
}

// Expample of the funciton in use:
console.log(arrayInBetween(4, 7)) // Output: [4, 5, 6, 7]