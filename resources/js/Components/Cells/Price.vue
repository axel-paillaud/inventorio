<script setup>
import { ref, computed } from 'vue';
import useFocus from '@/Composables/focus';
import { useForm } from '@inertiajs/vue3';
import { formatter } from '@/Services/currencyFormatter';
import { isNumber } from '@/validators/integer';
import InputOverlay from '@/Components/InputOverlay.vue';

const props = defineProps({
    rowId: Number,
    price: Number,
});

const emit = defineEmits({
    updatePrice: ( price ) => {
        if (isNumber(price)) {
            return true;
        }
        else {
            console.warn('Invalid price type!');
            return false;
        }
    },
    errorPrice: null,
});

const isActive = ref(false);
const inputPrice = ref(null);

useFocus(isActive, inputPrice);

let initPrice = props.price;


const form = useForm({
    row_id: props.rowId,
    price: props.price,
});

function updatePrice(price) {
    if (isNumber(price)) {
        emit('updatePrice', price);
    }
}

const formattedPrice = computed(() => {
    return formatter.format(form.price);
});

function submitCellData() {
    form.post('/inventorio/cells/price', {
        preserveScroll: true,
        onError: (error) => {
            emit('errorPrice', error.price);
            form.price = initPrice;
        },
        onSuccess: () => initPrice = form.price,
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
            ref="inputPrice"
            @change="submitCellData"
            @input="updatePrice(form.price)"
            class="py-3 px-6 w-full h-full focus:ring-0 absolute inset-0 z-60
            bg-gray-50 border-gray-500"
            v-show="isActive"
            type="number"
            v-model="form.price"
            min="0"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ formattedPrice }}
        </div>
    </td>
</template>
