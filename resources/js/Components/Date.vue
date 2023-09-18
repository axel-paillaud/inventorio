<script setup>
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';
</script>

<template>
    <div class='flex'>
        <span>2023</span>
        <button>
            <ChevronLeft />
        </button>
        <button>
            <ChevronRight />
        </button>
        <Dropdown>
            <template #trigger>
                <button>
                    Année
                    <ChevronDown />
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
