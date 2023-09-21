<script setup>
const props = defineProps({
    name: String,
    color: {type: String, default: 'gray'},
})

</script>

<template>
    <button
        class="transition-colors px-3 py-2 border rounded hover:bg-gray-100"
    >
        {{ name }}
    </button>
</template>
