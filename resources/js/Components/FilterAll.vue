<script setup>
import { computed } from 'vue';
import { useForm } from '@inertiajs/vue3';
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

function submitToggleAllTable() {
    useForm({}).post('/inventorio/filters', { preserveScroll: true });
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
