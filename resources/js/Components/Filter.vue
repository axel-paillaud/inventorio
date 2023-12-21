<script setup>
import { computed, ref } from 'vue';
import colors from '@/Services/ColorService';
import { router } from '@inertiajs/vue3';

const props = defineProps({
    tableId: Number,
    name: String,
    color: String,
    isActive: Boolean,
})

const classFilter = computed(() => ({
    [colors[props.color].filter]: true,
    [colors[props.color].bg]: props.isActive,
}));

console.log("setup :" + props.isActive);

function submit() {
    console.log("submit function :" + props.isActive);
    router.post(`/filter/${props.tableId}`, { isActive: props.isActive })
}

</script>

<template>
    <form @submit.prevent="submit">
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
