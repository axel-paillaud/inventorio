<script setup>
import { computed } from 'vue';
import colors from '@/Services/ColorService';

const props = defineProps({
    name: String,
    color: String,
    tables: Array,
})

const isAllTablesActive = computed(() => {
    return props.tables.every(table => table.isActive);
});

const classFilter = computed(() => ({
    [colors[props.color].filter]: true,
    [colors[props.color].bg]: isAllTablesActive.value,
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
