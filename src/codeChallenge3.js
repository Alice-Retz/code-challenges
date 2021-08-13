export function capitalizeObjectKeys(obj) {
    const objUp = Object.keys(obj);
    return objUp.map(objUp => 
        objUp.toUpperCase());
}

export function sortedKeys(obj) {
    const objSort = Object.keys(obj);
    return objSort.sort((a, b) => a.length - b.length);

};

export function getFilteredKey(obj) {
    const objFilter = Object.keys(obj);
    return objFilter.filter((obj) => obj === objFilter[2])
};

export function getArrayOfKeysAndValues(obj) {
    const objArr = Object.entries(obj);
    return objArr;
};

export function sortedArraysByValuesLength(obj) {
    const objSort = Object.entries(obj);
    return objSort.sort((a, b) => b[1].length - a[1].length);
};