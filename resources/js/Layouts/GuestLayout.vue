<script setup>
import { Link } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import LanguageSelection from '@/Components/LanguageSelection.vue';

const { t } = useI18n();

</script>

<template>
    <header class="fixed top-0 z-20 w-full bg-white">
        <div
            class="mx-auto px-4 sm:px-8 lg:px-12 h-16 mx-auto px-4 sm:px-8 lg:px-12
            justify-between flex items-center"
        >
            <div>
                <Link href="/">
                    {{ t('nav.home')}}
                </Link>
            </div>

            <LanguageSelection />

        </div>
    </header>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
