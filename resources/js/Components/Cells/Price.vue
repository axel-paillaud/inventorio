<script setup>
import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import { formatter } from '@/Composables/currencyFormatter';
import { isNumber } from '@/Composables/validators/integer';
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
    }
});

const isActive = ref(false);

const form = ref({
    row_id: props.rowId,
    price: props.price,
});

function updatePrice(price) {
    if (isNumber(price)) {
        emit('updatePrice', price);
    }
}

const formattedPrice = computed(() => {
    return formatter.format(form.value.price);
});

function submitCellData() {
    router.post('/inventorio/cells/price', form.value);
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
