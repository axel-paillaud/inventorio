<script setup>
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
</script>

<template>
    <div class="flex items-center text-sm gap-4">
        <!-- Date and arrow container -->
        <div class="flex items-center gap-4">
            <span>2023</span>
            <!-- Arrow container -->
            <div class="flex items-center gap-1.5">
                <button class="rounded-full hover:bg-gray-100 p-1.5">
                    <ChevronLeft :size="20"/>
                </button>
                <button class="rounded-full hover:bg-gray-100 p-1.5">
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
                    <DropdownLink :href="route('date.day', { year: 2023, month: 9, day: 27})"> Jour </DropdownLink>
                    <DropdownLink :href="route('date.month', { year: 2023, month: 9 })"> Mois </DropdownLink>
                    <DropdownLink :href="route('date.year', '2023')"> Année </DropdownLink>
                    <DropdownLink :href="route('profile.edit')"> Depuis toujours</DropdownLink>
                </div>
            </template>
        </Dropdown>
    </div>
</template>
