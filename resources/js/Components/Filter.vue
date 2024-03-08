<script setup>
import { ref, computed, watch } from 'vue';
import colors from '@/Services/ColorService';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    tableId: Number,
    name: String,
    color: String,
    isActive: Boolean,
})

const form = useForm({
    'id': props.tableId,
    'isActive': props.isActive,
});

const classFilter = computed(() => ({
    [colors[props.color].filter]: true,
    [colors[props.color].bg]: props.isActive,
}));

function submitToggleTable() {
    form.isActive = !form.isActive;
    form.post(
        '/inventorio/toggle',
        {preserveScroll: true}
    )
}

</script>

<template>
    <form @submit.prevent="submitToggleTable">
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
