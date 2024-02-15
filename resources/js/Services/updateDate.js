import { ref } from 'vue';

const currentDate = new Date();

export function initDate(initYear, initMonth, initDay) {
    const year = ref(null);
    const month = ref(null);
    const day = ref(null);

    if (initYear) year.value = initYear;
    else year.value = currentDate.getFullYear();

    if (initMonth) month.value = initMonth;
    else month.value = currentDate.getMonth() + 1;

    if (initDay) day.value = initDay;
    else day.value = currentDate.getDate();

    return { year, month, day };
}
