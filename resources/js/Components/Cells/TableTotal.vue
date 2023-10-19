<script setup>
import { computed } from 'vue';
import { formatter } from '@/Composables/formatter';

const props = defineProps({
    total: Number,
    rows: Array,
});

const total = computed(() => {
    const total = props.rows.reduce(
        (accumulator, currentValue) => accumulator + currentValue.total, 0
    );
    return formatter.format(total);
});

</script>

<template>
    <td
        data-testid="table-total"
        class="py-3 px-6 border-t border-t-gray-200"
        colspan="1"
    >
        {{ total }}
    </td>
</template>
