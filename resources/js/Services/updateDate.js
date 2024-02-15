import { ref } from 'vue';
import { router } from '@inertiajs/vue3';

const currentDate = new Date();

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

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

/* export function increaseYear(year) {
    if (!((year + 1) > currentDate.getFullYear())) {
        year += 1;
        router.get(`/inventorio/year/${year}`);
    }
} */

export const updateYear = {
    decrease(year) {
        year -= 1;
        router.get(`/inventorio/year/${year}`);
    },
    increase(year) {
        if (!((year + 1) > currentDate.getFullYear())) {
            year += 1;
            router.get(`/inventorio/year/${year}`);
        }
    }
}

export const updateMonth = {
    decrease(year, month) {
        if (month <= 1) {
            month = 12;
            year --;
            router.get(`/inventorio/month/${year}/${month}`);
        }
        else {
            month -= 1;
            router.get(`/inventorio/month/${year}/${month}`);
        }
    },
    increase(year, month) {
        if (!((month + 1) > (currentDate.getMonth() + 1) && year == currentDate.getFullYear())) {
            if (month >= 12) {
                month = 1;
                year++;
                router.get(`/inventorio/month/${year}/${month}`);
            }
            else {
                month += 1;
                router.get(`/inventorio/month/${year}/${month}`);
            }
        }
    },
}

export const updateDay = {
    decrease(year, month, day) {
        if (day <= 1) {
            // not ok, have to make class here, or rewrite the method
            updateMonth.decrease(year, month);
            day = daysInMonth(year, month);
            router.get(`/inventorio/day/${year}/${month}/${day}`);
        }
        else {
            day -= 1;
            router.get(`/inventorio/day/${year}/${month}/${day}`);
        }
    },
    increase(year, month, day) {

    }
}
