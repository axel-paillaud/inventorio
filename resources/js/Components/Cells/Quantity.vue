<script setup>
import { ref } from 'vue';
import useFocus from '@/Composables/focus';
import { useForm } from '@inertiajs/vue3';
import InputOverlay from '@/Components/InputOverlay.vue';
import { isPositiveInteger } from '@/validators/integer';

const props = defineProps({
    quantity: Number,
    rowId: Number,
});

const emit = defineEmits({
    updateQuantity: ( quantity ) => {
        if (isPositiveInteger(quantity)) {
            return true;
        }
        else {
            console.warn('Invalid quantity type!');
            return false;
        }
    },
    errorQuantity: null,
});

const isActive = ref(false);
const inputQuantity = ref(null);

useFocus(isActive, inputQuantity);

let initQuantity = props.quantity;

const form = useForm({
    row_id: props.rowId,
    quantity: props.quantity,
});


function updateQuantity(quantity) {
    if (isPositiveInteger(quantity)) {
        emit('updateQuantity', quantity);
    }
}

function submitCellData() {
    form.post('/inventorio/cells/quantity', {
        preserveScroll: true,
        onError: (error) => {
            emit('errorQuantity', error.quantity);
            form.quantity = initQuantity;
        },
        onSuccess: () => initQuantity = form.quantity,
    });
}

</script>

<template>
<td
    @click="isActive = true"
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    >
        <InputOverlay :isActive="isActive" @closeCell="isActive = false" />
        <input
            ref="inputQuantity"
            @change="submitCellData"
            @input="updateQuantity(form.quantity)"
            class="py-3 px-6 w-full h-full focus:ring-0 absolute inset-0 z-60
            bg-gray-50 border-gray-500"
            v-show="isActive"
            type="number"
            step="1"
            min="0"
            v-model="form.quantity"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ form.quantity }}
        </div>

    </td>
</template>
