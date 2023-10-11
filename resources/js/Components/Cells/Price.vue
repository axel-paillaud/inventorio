<script setup>
import { ref, computed } from 'vue';
import { formatter } from '@/Services/FormatService';
import InputOverlay from '@/Components/InputOverlay.vue';

const props = defineProps({
    price: Number,
});

const isActive = ref(false);
const price = ref(props.price);

const formattedPrice = computed(() => {
    return formatter.format(price.value);
});

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
            @input="$emit('updatePrice', price)"
            class="py-3 px-6 w-full h-full focus:ring-0 absolute inset-0 z-60
            bg-gray-50 border-gray-500"
            v-show="isActive"
            type="number"
            v-model="price"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ formattedPrice }}
        </div>
    </td>
</template>
