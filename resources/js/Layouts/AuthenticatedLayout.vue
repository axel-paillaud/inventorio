<script setup>
import { ref } from 'vue';
import Header from '@/Components/Header.vue';
</script>

<template>
    <div class="h-full bg-gray-100">
        <Header />

        <!-- Page Content -->
        <slot />

    </div>
</template>
