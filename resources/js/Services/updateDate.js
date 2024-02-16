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
            // duplication of updateMonth.decrease() here
            if (month <= 1) {
                month = 12;
                year --;
                router.get(`/inventorio/month/${year}/${month}`);
            }
            else {
                month -= 1;
                router.get(`/inventorio/month/${year}/${month}`);
            }
            day = daysInMonth(year, month);
            router.get(`/inventorio/day/${year}/${month}/${day}`);
        }
        else {
            day -= 1;
            router.get(`/inventorio/day/${year}/${month}/${day}`);
        }
    },
    increase(year, month, day) {
        if (day.value >= daysInMonth(year.value, month.value)) {
            // duplication of updateMonth.increase() here
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
            day = 1;
            router.get(`/inventorio/day/${year}/${month}/${day}`);
        }
        else {
            day += 1;
            router.get(`/inventorio/day/${year}/${month}/${day}`);
        }
    }
}

export class UpdateDate {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    decreaseYear() {
        this.year -= 1;
        router.get(`/inventorio/year/${this.year}`);
    }

    increaseYear() {
        if (!((this.year + 1) > currentDate.getFullYear())) {
            this.year += 1;
            router.get(`/inventorio/year/${this.year}`);
        }
    }

    decreaseMonth() {
        if (this.month <= 1) {
            this.month = 12;
            this.decreaseYear();
            router.get(`/inventorio/month/${this.year}/${this.month}`);
        }
        else {
            this.month -= 1;
            router.get(`/inventorio/month/${this.year}/${this.month}`);
        }
    }

    increaseMonth() {
        if (!((this.month + 1) > (currentDate.getMonth() + 1) && this.year == currentDate.getFullYear())) {
            if (this.month >= 12) {
                this.month = 1;
                this.increaseYear();
                router.get(`/inventorio/month/${this.year}/${this.month}`);
            }
            else {
                this.month += 1;
                router.get(`/inventorio/month/${this.year}/${this.month}`);
            }
        }
    }

    decreaseDay() {
        if (this.day <= 1) {
            this.decreaseMonth();
        }
        else {
            this.day -= 1;
            router.get(`/inventorio/day/${this.year}/${this.month}/${this.day}`);
        }
    }

    increaseDay() {
        if (this.day >= daysInMonth(this.year, this.month)) {
            // duplication of updateMonth.increase() here
            this.increaseMonth();
            this.day = 1;
            router.get(`/inventorio/day/${this.year}/${this.month}/${this.day}`);
        }
        else {
            this.day += 1;
            router.get(`/inventorio/day/${this.year}/${this.month}/${this.day}`);
        }
    }
}
