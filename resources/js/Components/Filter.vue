<script setup>

const props = defineProps({
    name: String,
})

</script>

<template>
    <button
        class="transition-colors px-3 py-2 border rounded"
    >
        {{ name }}
    </button>
</template>
