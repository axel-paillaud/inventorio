<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { fullDateFormatter, monthFormatter } from '@/Composables/dateFormatter.js';
import checkDateTypeInUrl from '@/Composables/parseUrl.js';
import { dateFrenchTranslation } from '@/Composables/englishToFrench';
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
const fullDate = ref(null);
const monthAndYear = ref(null);

const dateType = ref(null);

dateType.value = checkDateTypeInUrl(window.location.href);

const currentDate = new Date();
year.value = currentDate.getFullYear();
// Month in JavaScript start at 0, we need real current date number.
month.value = currentDate.getMonth() + 1;
day.value = currentDate.getDate();

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
        decrease() {
            month.value -= 1;
            monthAndYear.value = monthFormatter.format(new Date(year.value, month.value - 1, day.value));
            router.get(`/inventorio/month/${year.value}/${month.value}`);
        },
        increase() {
            month.value += 1;
            monthAndYear.value = monthFormatter.format(new Date(year.value, month.value - 1, day.value));
            router.get(`/inventorio/month/${year.value}/${month.value}`);
        }
    },
    day: {

    },
}

// try computed here
fullDate.value = fullDateFormatter.format(new Date(year.value, month.value, day.value));
monthAndYear.value = monthFormatter.format(new Date(year.value, month.value - 1, day.value));

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
        <div
            v-else-if="dateType === 'month'"
            class="flex items-center gap-4"
        >
            <span>{{ monthAndYear }}</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <!-- We need preverveState and preserveScroll ? -->
                <!-- See partial reloads -->
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDate['month'].decrease(month)"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDate['month'].increase(month)"
                >
                    <ChevronRight :size="20"/>
                </button>
            </div>
        </div>
        <div
            v-else="dateType === 'day'"
            class="flex items-center gap-4"
        >
            <span>{{ fullDate }}</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <!-- We need preverveState and preserveScroll ? -->
                <!-- See partial reloads -->
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDate['day'].decrease(day)"
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
                        :href="route('date.day', { year, month, day})"
                    >
                        Jour
                    </DropdownLink>
                    <DropdownLink
                        @click="dateType = 'month'"
                        :href="route('date.month', { year, month })"
                    >
                        Mois
                    </DropdownLink>
                    <DropdownLink
                        @click="dateType = 'year'"
                        :href="route('date.year', year)"
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
