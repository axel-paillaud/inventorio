export function isDateValid(dateStr) {
    if (typeof dateStr === 'number') return false;
    return !isNaN(new Date(dateStr));
}
