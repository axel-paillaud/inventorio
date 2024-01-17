export function getFormattedCurrentDate(currentDate) {
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    const formattedCurrentDate = currentYear + '-' + currentMonth + '-' + currentDay;
    return formattedCurrentDate;
}

