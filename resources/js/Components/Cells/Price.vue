<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { formatter } from '@/Services/FormatService';

const props = defineProps({
    price: Number,
    rowId: Number,
});

const isActive = ref(false);

const closeOnEscape = (e) => {
    if (isActive.value && (e.key === "Escape" || e.key === "Enter")) {
        isActive.value = false;
    }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.EventListener('keydown', closeOnEscape));

const formattedPrice = formatter.format(props.price);

</script>

<template>
    <td
        @click="isActive = true"
        class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    >
        <!-- Full Screen Overlay -->
        <div
            v-show="isActive"
            class="fixed inset-0 z-50 cursor-default"
            @click.stop="isActive = false"
        >
        </div>
        <input
            class="py-3 px-6 w-full h-full focus:ring-0 absolute inset-0 z-30
            bg-gray-50 border-gray-500"
            v-show="isActive"
            type="number"
            :value="price"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ formattedPrice }}
        </div>
    </td>
</template>
