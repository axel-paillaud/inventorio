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
                <button>
                    <ChevronLeft :size="20"/>
                </button>
                <button>
                    <ChevronRight :size="20"/>
                </button>
            </div>
        </div>
        <Dropdown>
            <template #trigger>
                <button
                    class='flex items-center py-2 px-3 border gap-1.5 rounded'
                >
                    Année
                    <ChevronDown :size="16"/>
                </button>
            </template>
            <template #content>
                <button>Jour</button>
                <button>Mois</button>
                <button>Année</button>
                <button>Depuis toujours</button>
            </template>
        </Dropdown>
    </div>
</template>
