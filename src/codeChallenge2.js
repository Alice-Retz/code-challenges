export function evensOnly(arr) {
    return arr.filter((num) =>
    num % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr) {
    return arr.filter((item) => {
        return item.length <= 5;
    });
}

export function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter((item) => {
        return item.member === true;
    })
  
}

export function ofAge(arr){
    return arr.filter((item) => {
        return item.age >= 18;
    })
}

export function leastToGreatest(arr){
    return arr.sort((a, b) => a - b);
}

export function greatestToLeast(arr){
    return arr.sort((a, b) => b - a);
}

export function lengthSort(arr){
    return arr.sort((a, b) => a.length - b.length);
}

export function alphabetical(arr){
    return arr.sort();
}

export function byAge(arr){
    return arr.sort((a, b) => a.age - b.age);
}