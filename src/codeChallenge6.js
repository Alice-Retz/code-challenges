export function returnTen(str) {
    return Array.from(str).slice(-10);
}

export function findMax(matrix) {
    return matrix.flat(1).sort((a, b) => b - a)[0];
}

export function totalSum(matrix) {
    return matrix.flat(1).reduce((a, b) => {
        return a + b;
    })
}

export function grandTotal(stores){
  'Here what you want to do is tally all of the cookies sold by adding up the numbers in the equivalent position of each array, and then compare them to the time in the equivalent position in the first array'
}

export function salesData(hours, data){
  
}