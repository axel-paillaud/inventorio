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

export class UpdateDate {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    callRouter(dateType) {
        if (dateType === "year") {
            router.get(route('inventorio.year', { year: this.year }) );
        }
        else if (dateType === "month") {
            router.get(`/inventorio/month/${this.year}/${this.month}`);
        }
        else if (dateType === "day" ) {
            router.get(`/inventorio/day/${this.year}/${this.month}/${this.day}`);
        }
    }

    decreaseYear() {
        this.year -= 1;
    }

    increaseYear() {
        if (!((this.year + 1) > currentDate.getFullYear())) {
            this.year += 1;
        }
    }

    decreaseMonth() {
        if (this.month <= 1) {
            this.month = 12;
            this.decreaseYear();
        }
        else {
            this.month -= 1;
        }
    }

    increaseMonth() {
        if (!((this.month + 1) > (currentDate.getMonth() + 1) && this.year == currentDate.getFullYear())) {
            if (this.month >= 12) {
                this.month = 1;
                this.increaseYear();
            }
            else {
                this.month += 1;
            }
        }
    }

    decreaseDay() {
        if (this.day <= 1) {
            this.decreaseMonth();
            this.day = daysInMonth(this.year, this.month);
        }
        else {
            this.day -= 1;
        }
    }

    increaseDay() {
        if (this.day >= daysInMonth(this.year, this.month)) {
            this.increaseMonth();
            this.day = 1;
        }
        else {
            this.day += 1;
        }
    }
}
