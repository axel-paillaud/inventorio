<script setup>
defineProps({
    name: String,
    color: String
})
</script>

<template>
    <button class="px-3 py-2 border rounded hover:bg-gray-100">
        {{ name }}
    </button>
</template>
