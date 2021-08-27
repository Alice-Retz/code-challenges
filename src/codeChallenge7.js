export function sortByChildren(arr){
    return arr.sort((a, b) => a.children.length - b.children.length);
} 

export function containsW(str){
    return str.match(/w/) ? true : false;
};

export function isNum(input){
    
};

export function containsWorld(input){
    return input.match(/[w][o][r][l][d]/) ? true : false;
};

export function isCapitalized(str){
    return str.match(/[A-Z]/) ? str.match : [];
};

export function citiesAtoJ(arr){

};