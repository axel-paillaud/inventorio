import { getFormattedCurrentDate } from "./getCurrentDate";

/* Build default date based on current filter date */
/* If we have only year set, set month and day to first */

const currentDate = new Date();

const formattedCurrentDate = getFormattedCurrentDate(currentDate);

export function buildDefaultDate(yearFilter, monthFilter, dayFilter) {
    if (!yearFilter && !monthFilter && !dayFilter) return formattedCurrentDate;

    if (!monthFilter && !dayFilter) return `${yearFilter}-01-01`;

    if (!dayFilter) {
        const formattedMonthFilter = monthFilter.toString().padStart(2, '0');
        return `${yearFilter}-${formattedMonthFilter}-01`;
    }

    const formattedMonthFilter = monthFilter.toString().padStart(2, '0');
    const formattedDayFilter = dayFilter.toString().padStart(2, '0');
    return `${yearFilter}-${formattedMonthFilter}-${formattedDayFilter}`;
}
