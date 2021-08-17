export function getHouses(obj) {
    return Object.values(obj).map(obj => obj.house);
}

export function updateNumbers(obj) {
    return Object.entries(obj).map(arr => arr[0] + ": " + arr[1]);
}

export function totalCharacters(arr) {
    let count = 0;
    Object.values(arr).forEach(arr => {
        count++;
        count += arr.children.length;
        if (arr.spouse) count++;
        
    });
    return count;
}