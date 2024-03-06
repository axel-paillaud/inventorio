<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>
    <label class="block font-medium text-sm text-gray-700">
        <span v-if="value" class="capitalize">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
