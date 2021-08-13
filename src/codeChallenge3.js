export function capitalizeObjectKeys(obj) {
    return Object.keys(obj).map(obj => obj.toUpperCase());
}

export function sortedKeys(obj) {
    return Object.keys(obj).sort((a, b) => a.length - b.length);

};

export function getFilteredKey(obj) {
    const objFilter = Object.keys(obj);
    return objFilter.filter((obj) => obj === objFilter[2])
};

export function getArrayOfKeysAndValues(obj) {
    return Object.entries(obj);
};

export function sortedArraysByValuesLength(obj) {
    return Object.entries(obj).sort((a, b) => b[1].length - a[1].length);
};