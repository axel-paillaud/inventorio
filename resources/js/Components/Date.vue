<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { initDate } from '@/Services/updateDate.js';
import { UpdateDate } from '@/Services/updateDate.js';
import { fullDateFormatter, monthFormatter } from '@/Services/dateFormatter.js';
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

const { t } = useI18n();

const { year, month, day } = initDate(props.year, props.month, props.day);

const updateDate = new UpdateDate(year.value, month.value, day.value);

const updateAndGetYear = {
    increase() {
        updateDate.increaseYear();
        updateDate.callRouter("year");
    },
    decrease() {
        updateDate.decreaseYear();
        updateDate.callRouter("year");
    }
}

const updateAndGetMonth = {
    increase() {
        updateDate.increaseMonth();
        updateDate.callRouter("month");
    },
    decrease() {
        updateDate.decreaseMonth();
        updateDate.callRouter("month");
    }
}

const updateAndGetDay = {
    increase() {
        updateDate.increaseDay();
        updateDate.callRouter("day");
    },
    decrease() {
        updateDate.decreaseDay();
        updateDate.callRouter("day");
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
                    @click="updateAndGetYear.decrease()"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateAndGetYear.increase()"
                >
                    <ChevronRight :size="20"/>
                </button>
            </div>
        </div>
        <div
            v-else-if="dateType === 'month'"
            class="flex items-center gap-4"
        >
            <span class="whitespace-nowrap">{{ formattedMonthAndYear }}</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <!-- We need preverveState and preserveScroll ? -->
                <!-- See partial reloads -->
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateAndGetMonth.decrease()"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateAndGetMonth.increase()"
                >
                    <ChevronRight :size="20"/>
                </button>
            </div>
        </div>
        <div
            v-else="dateType === 'day'"
            class="flex items-center gap-4"
        >
            <span class="whitespace-nowrap">{{ formattedFullDate }}</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateAndGetDay.decrease()"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="updateAndGetDay.increase()"
                >
                    <ChevronRight :size="20"/>
                </button>
            </div>
        </div>
        <Dropdown align="right">
            <template #trigger>
                <button
                    class='flex items-center py-2 px-3 border gap-1.5 rounded
                    hover:bg-gray-100 h-10'
                >
                    <span class="first-letter:capitalize">
                        {{ t(`date.${dateType}`) }}
                    </span>
                    <ChevronDown :size="16"/>
                </button>
            </template>
            <template #content>
                <div class="flex flex-col">
                    <DropdownLink
                        class="capitalize"
                        @click="dateType = 'day'"
                        :href="route('inventorio.day', { year, month, day } )"
                    >
                        {{ t('date.day') }}
                    </DropdownLink>
                    <DropdownLink
                        class="capitalize"
                        @click="dateType = 'month'"
                        :href="route('inventorio.month', { year, month } )"
                    >
                        {{ t('date.month') }}
                    </DropdownLink>
                    <DropdownLink
                        class="capitalize"
                        @click="dateType = 'year'"
                        :href="route('inventorio.year', { year } )"
                    >
                        {{ t('date.year') }}
                    </DropdownLink>
                    <DropdownLink
                        class="first-letter:capitalize"
                        @click="dateType = 'always'"
                        :href="route('inventorio')"
                    >
                        {{ t('date.always') }}
                    </DropdownLink>
                </div>
            </template>
        </Dropdown>
    </div>
</template>
