<script setup>
import { useI18n } from 'vue-i18n';
import { ChevronDown, Languages } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';
import { router } from '@inertiajs/vue3';

const { locale } = useI18n();

const selectFrench = () => {
    router.post('/locale', { language: 'fr'});
    locale.value = "fr";
}

const selectEnglish = () => {
    router.post('/locale', { language: 'en'});
    locale.value = "en";
}

</script>

<template>
    <Dropdown width="40">
        <template #trigger>
            <span class="inline-flex border rounded py-2 px-3 h-10 hover:bg-gray-100">
                <button class="inline-flex gap-1.5 items-center">
                    <Languages size="18"/> <ChevronDown size="16"></ChevronDown>
                </button>
            </span>
        </template>
        <template #content>
            <button
                class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                @click="selectFrench"
            >
                Français
            </button>
            <button
                class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                @click="selectEnglish"
            >
                English
            </button>
        </template>
    </Dropdown>
</template>
