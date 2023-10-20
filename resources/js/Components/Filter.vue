<script setup>
import { ref, computed } from 'vue';
import colors from '@/Services/ColorService';

const props = defineProps({
    name: String,
    color: String,
    isActive: Boolean,
})

const classFilter = computed(() => ({
    [colors[props.color].filter]: true,
    [colors[props.color].bg]: props.isActive,
}));

</script>

<template>
    <button
        :class="classFilter"
        class="transition-colors px-3 py-2 border rounded"
    >
        {{ name }}
    </button>
</template>
