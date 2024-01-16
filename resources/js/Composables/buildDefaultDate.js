/* Build default date based on current filter date */

export function buildDefaultDate(year, month, day) {
    if (!year && !month && !day) return undefined;
    if (!month && !day) return `${year}-01-01`;
    if (!day) return `${year}-${month}-01`;
    return `${year}-${month}-${day}`;
}
