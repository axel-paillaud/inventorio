<script setup>
import { computed } from 'vue';
import { router } from '@inertiajs/vue3';
import {
    initDate
} from '@/Services/updateDate.js';
import { UpdateDate } from '@/Services/updateDate.js';
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

const { year, month, day } = initDate(props.year, props.month, props.day);

const updateDate = new UpdateDate(year.value, month.value, day.value);

const filterYear = {
    increase() {
        updateDate.increaseYear();
        updateDate.callRouter("year");
    },
    decrease() {
        updateDate.decreaseYear();
        updateDate.callRouter("year");
    }
}

const formattedFullDate = computed(() => {
    return fullDateFormatter.format(new Date(year.value, month.value - 1, day.value));
});

const formattedMonthAndYear = computed(() => {
    return monthFormatter.format(new Date(year.value, month.value - 1, day.value));

});

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
                    @click="filterYear.decrease()"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="filterYear.increase()"
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
                    @click="updateDate.decreaseMonth()"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDate.increaseMonth()"
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
                    @click="updateDate.decreaseDay()"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateDay.increase(year, month, day)"
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
