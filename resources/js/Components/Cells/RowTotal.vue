<script setup>
import { computed, watch } from 'vue';
import { formatter } from '@/Composables/currencyFormatter.js'
import { isNumber } from '@/Composables/validators/integer';

const props = defineProps({
    quantity: Number,
    price: Number,
});

const emit = defineEmits({
    updateTotal: ( total ) => {
        if (isNumber(total)) return true;
        else {
            console.war('Invalid total row type!');
            return false;
        }
    }
});

const total = computed(() => {
    return props.price * props.quantity;
});

const formattedTotal = computed(() => formatter.format(total.value));

emit('updateTotal', total.value);

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
