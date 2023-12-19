<script setup>
import { computed, ref } from 'vue';
import colors from '@/Services/ColorService';
import { router } from 'vue';

const props = defineProps({
    name: String,
    color: String,
    isActive: Boolean,
})

const form = ref({ active: null });

const classFilter = computed(() => ({
    [colors[props.color].filter]: true,
    [colors[props.color].bg]: props.isActive,
}));

</script>

<template>
    <button
        data-testid="filter-button"
        :class="classFilter"
        class="transition-colors px-3 py-2 border rounded"
    >
        {{ name }}
    </button>
</template>
