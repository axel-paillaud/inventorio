<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { fullDateFormatter, monthFormatter } from '@/Composables/dateFormatter.js';
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';

</script>

<script>

const year = ref(0);
const month = ref(0);
const day = ref(0);

const currentDate = new Date();
year.value = currentDate.getFullYear();
// Month in JavaScript start at 0, we need real current date number.
month.value = currentDate.getMonth() + 1;
day.value = currentDate.getDate();


const decreaseYear = () => {
    year.value -= 1;
    router.get(`/inventorio/year/${year.value}`);
 }

const increaseYear = () => {
    if ((year.value + 1) > currentDate.getFullYear()) {
        year.value = currentDate.getFullYear();
    }
    else {
        year.value += 1;
    }
    router.get(`/inventorio/year/${year.value}`);
}

const updateDate = {
    year: {
       decrease() {
            year.value -= 1;
            router.get(`/inventorio/year/${year.value}`);
        },
        increase() {
            if ((year.value + 1) > currentDate.getFullYear()) {
                year.value = currentDate.getFullYear();
            }
            else {
                year.value += 1;
            }
            router.get(`/inventorio/year/${year.value}`);

        }
    },
    month: {

    },
    day: {

    },
}

console.log(fullDateFormatter.format(new Date(year.value, month.value, day.value)));
console.log(monthFormatter.format(new Date(year.value, month.value, day.value)));

</script>

<template>
    <div class="flex items-center text-sm gap-4">
        <!-- Date and arrow container -->
        <div class="flex items-center gap-4">
            <span>{{ year }}</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <!-- We need preverveState and preserveScroll ? -->
                <!-- See partial reloads -->
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDate['year'].decrease(year)"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDate['year'].increase(year)"
                >
                    <ChevronRight :size="20"/>
                </button>
            </div>
        </div>
        <Dropdown align="right">
            <template #trigger>
                <button
                    class='flex items-center py-2 px-3 border gap-1.5 rounded
                    hover:bg-gray-100'
                >
                    <span>Année</span>
                    <ChevronDown :size="16"/>
                </button>
            </template>
            <template #content>
                <div class="flex flex-col">
                    <DropdownLink
                        :href="route('date.day', { year, month, day})"
                    >
                        Jour
                    </DropdownLink>
                    <DropdownLink
                        :href="route('date.month', { year, month })"
                    >
                        Mois
                    </DropdownLink>
                    <DropdownLink
                        :href="route('date.year', year)"
                    >
                        Année
                    </DropdownLink>
                    <DropdownLink
                        :href="route('profile.edit')"
                    >
                        Depuis toujours
                    </DropdownLink>
                </div>
            </template>
        </Dropdown>
    </div>
</template>
