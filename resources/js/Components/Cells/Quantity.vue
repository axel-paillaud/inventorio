<script setup>
import { ref, watch } from 'vue';
import InputOverlay from '@/Components/InputOverlay.vue';
import { isPositiveInteger } from '@/Composables/validators/integer';

const props = defineProps({
    quantity: Number,
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
    }
});

const isActive = ref(false);
const quantity = ref(props.quantity);

watch(quantity, (newQuantity, oldQuantity) => {
    if (isPositiveInteger(newQuantity)) {
        quantity.value = newQuantity;
    }
    else {
        quantity.value = oldQuantity;
    }
});

function updateQuantity(quantity) {
    if (isPositiveInteger(quantity)) {
        emit('updateQuantity', quantity);
    }
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
            @input="updateQuantity(quantity)"
            class="py-3 px-6 w-full h-full focus:ring-0 absolute inset-0 z-60
            bg-gray-50 border-gray-500"
            v-show="isActive"
            type="number"
            step="1"
            v-model="quantity"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ quantity }}
        </div>

    </td>
</template>
