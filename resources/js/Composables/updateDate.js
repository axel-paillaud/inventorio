import { router } from '@inertiajs/vue3';

export const updateDate = {
    year: {
       decrease(year) {
            year.value -= 1;
            router.get(`/inventorio/year/${year.value}`);
        },
        increase(year) {
            if ((year.value + 1) > currentDate.getFullYear()) {
                year.value = currentDate.getFullYear();
            }
            else {
                year.value += 1;
            }
            router.get(`/inventorio/year/${year.value}`);

        }
    }
}
