<script setup>
import { computed, watch } from 'vue';
import { formatter } from '@/Services/FormatService.js'

const props = defineProps({
    quantity: Number,
    price: Number,
});

const emit = defineEmits(['updateTotal']);

const total = computed(() => {
    return props.price * props.quantity;
});

const formattedTotal = computed(() => formatter.format(total.value));

watch(total, (newTotal) => {
    emit('updateTotal', newTotal);
});


</script>

<template>
    <td class="p-0 border border-white border-b-gray-100">
        <div
            data-testid="row-total"
            class="py-3 px-6"
        >
            {{ formattedTotal }}
        </div>
    </td>
</template>
