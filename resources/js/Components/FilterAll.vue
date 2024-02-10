<script setup>
import { computed } from 'vue';
import colors from '@/Services/ColorService';
import { router } from '@inertiajs/vue3';

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

function submitToggleAllTable() {
    router.post('/inventorio/filters');
}

</script>

<template>
    <form @submit.prevent="submitToggleAllTable">
        <button
            data-testid="filter-button"
            :class="classFilter"
            class="transition-colors px-3 py-2 border rounded"
            type="submit"
        >
            {{ name }}
        </button>
    </form>
</template>
