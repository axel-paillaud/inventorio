export function isPositiveInteger(value) {
    if (Number.isInteger(value) && value > 0) return true;
    else return false;
}
