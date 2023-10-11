<script setup>
import { ref, computed } from 'vue';
import InputOverlay from '@/Components/InputOverlay.vue';

const props = defineProps({
    date: String,
    rowId: Number,
});

const isActive = ref(false);
const date = ref(props.date);

const formattedDate = computed(() => {
    return new Date(date.value).toLocaleDateString();
});

</script>

<template>
    <td
        @click="isActive = true"
        class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    >
        <InputOverlay :isActive="isActive"  @closeCell="isActive = false" />
        <input
            v-show="isActive"
            class="py-3 px-6 focus:ring-0 transition-colors absolute inset-0 w-48
            z-60 bg-gray-50 border-gray-500"
            type="date"
            v-model="date"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ formattedDate }}
        </div>
    </td>
</template>
