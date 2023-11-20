<script setup>
import { ref, onMounted } from 'vue';
import { router } from '@inertiajs/vue3';
import { Link } from '@inertiajs/vue3';
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';

const year = ref(0);
const month = ref(0);
const day = ref(0);

onMounted(() => {
    const currentDate = new Date();
    year.value = currentDate.getFullYear();
    month.value = currentDate.getMonth();
    day.value = currentDate.getDate();
});

const callback = () => {
    // year.value -= 1;
    year.value - 1;
    console.log(year.value);
    router.get('inventorio/year/' + year.value);
}
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
                    :href="route('date.year', year)"
                    @click.prevent="callback"
                >
                    <ChevronLeft :size="20"/>
                </button>
                <button
                    class="rounded-full hover:bg-gray-100 p-1.5"
                    @click="callback"
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
                        :href="route('date.day', { year: 2023, month: 9, day: 27})"
                    >
                        Jour
                    </DropdownLink>
                    <DropdownLink
                        :href="route('date.month', { year: 2023, month: 9 })"
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
