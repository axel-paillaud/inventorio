<script setup>
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';
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
                    class='flex items-center py-2 px-3 border gap-1.5 rounded'
                >
                    <span>Année</span>
                    <ChevronDown :size="16"/>
                </button>
            </template>
            <template #content>
                <div class="flex flex-col">
                    <button class="text-left">Jour</button>
                    <button class="text-left">Mois</button>
                    <button class="text-left">Année</button>
                    <button class="text-left">Depuis toujours</button>
                </div>
            </template>
        </Dropdown>
    </div>
</template>
