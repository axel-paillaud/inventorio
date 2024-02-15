<script setup>
import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import {
    initDate, updateYear, updateMonth, updateDay
} from '@/Services/updateDate.js';
import { fullDateFormatter, monthFormatter } from '@/Composables/dateFormatter.js';
import { dateFrenchTranslation } from '@/Composables/englishToFrench';
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import '@/Services/updateDate';

const props = defineProps({
    dateType: String,
    year: Number,
    month: Number,
    day: Number,
});

const currentDate = new Date();

const { year, month, day } = initDate(props.year, props.month, props.day);

const formattedFullDate = computed(() => {
    return fullDateFormatter.format(new Date(year.value, month.value - 1, day.value));
});

const formattedMonthAndYear = computed(() => {
    return monthFormatter.format(new Date(year.value, month.value - 1, day.value));

});

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

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

</script>

<template>
    <div class="flex items-center text-sm gap-4">
        <!-- Date and arrow container -->
        <div
            v-if="dateType === 'always'"
            class="flex items-center gap-4"
        >
        </div>
        <div
            v-else-if="dateType === 'year'"
            class="flex items-center gap-4"
        >
            <span>{{ year }}</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateYear.decrease(year)"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateYear.increase(year)"
                >
                    <ChevronRight :size="20"/>
                </button>
            </div>
        </div>
        <div
            v-else-if="dateType === 'month'"
            class="flex items-center gap-4"
        >
            <span>{{ formattedMonthAndYear }}</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <!-- We need preverveState and preserveScroll ? -->
                <!-- See partial reloads -->
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateMonth.decrease(year, month)"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateMonth.increase(year, month)"
                >
                    <ChevronRight :size="20"/>
                </button>
            </div>
        </div>
        <div
            v-else="dateType === 'day'"
            class="flex items-center gap-4"
        >
            <span>{{ formattedFullDate }}</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <!-- We need preverveState and preserveScroll ? -->
                <!-- See partial reloads -->
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDay.decrease(year, month, day)"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDate['day'].increase(day)"
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
                    <span>{{ dateFrenchTranslation[dateType] }}</span>
                    <ChevronDown :size="16"/>
                </button>
            </template>
            <template #content>
                <div class="flex flex-col">
                    <DropdownLink
                        @click="dateType = 'day'"
                        :href="route('inventorio.day', { year, month, day } )"
                    >
                        Jour
                    </DropdownLink>
                    <DropdownLink
                        @click="dateType = 'month'"
                        :href="route('inventorio.month', { year, month } )"
                    >
                        Mois
                    </DropdownLink>
                    <DropdownLink
                        @click="dateType = 'year'"
                        :href="route('inventorio.year', { year } )"
                    >
                        Année
                    </DropdownLink>
                    <DropdownLink
                        @click="dateType = 'always'"
                        :href="route('inventorio')"
                    >
                        Depuis toujours
                    </DropdownLink>
                </div>
            </template>
        </Dropdown>
    </div>
</template>
