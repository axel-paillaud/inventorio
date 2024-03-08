export function isPositiveInteger(value) {
    if (Number.isInteger(value) && value > 0) return true;
    else return false;
}

export function isNumber(value) {
    if(typeof value === 'number') return true;
    else return false;
}
