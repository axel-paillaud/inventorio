const updateDate = {
    year: {
       decrease() {
            year.value -= 1;
            router.get(`/inventorio/year/${year.value}`);
        },
        increase() {
            if (!((year.value + 1) > currentDate.getFullYear())) {
                year.value += 1;
                router.get(`/inventorio/year/${year.value}`);
            }
        }
    },
    month: {
        decrease() {
            if (month.value <= 1) {
                month.value = 12;
                year.value --;
                router.get(`/inventorio/month/${year.value}/${month.value}`);
            }
            else {
                month.value -= 1;
                router.get(`/inventorio/month/${year.value}/${month.value}`);
            }
        },
        increase() {
            if (!((month.value + 1) > (currentDate.getMonth() + 1) && year.value == currentDate.getFullYear())) {
                if (month.value >= 12) {
                    month.value = 1;
                    year.value++;
                    router.get(`/inventorio/month/${year.value}/${month.value}`);
                }
                else {
                    month.value += 1;
                    router.get(`/inventorio/month/${year.value}/${month.value}`);
                }
            }

        }
    },
    day: {
        decrease() {
            if (day.value <= 1) {
                updateDate.month.decrease();
                day.value = daysInMonth(year.value, month.value);
                router.get(`/inventorio/day/${year.value}/${month.value}/${day.value}`);
            }
            else {
                day.value -= 1;
                router.get(`/inventorio/day/${year.value}/${month.value}/${day.value}`);
            }
        },
        increase() {
            if (day.value >= daysInMonth(year.value, month.value)) {
                updateDate.month.increase();
                day.value = 1;
                router.get(`/inventorio/day/${year.value}/${month.value}/${day.value}`);
            }
            else {
                day.value += 1;
                router.get(`/inventorio/day/${year.value}/${month.value}/${day.value}`);
            }
        },
    },
}

