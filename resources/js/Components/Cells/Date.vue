<script setup>
import { ref, computed } from 'vue';
import InputOverlay from '@/Components/InputOverlay.vue';
import { useTableStore } from '@/Stores/table';

const props = defineProps({
    date: String,
    rowId: Number,
});

const store = useTableStore();

const updateCell = (event) => {
    store.rows.find((row) => row.id === props.rowId).date = event.target.value;
}

const isActive = ref(false);

const formattedDate = computed(() => {
    return new Date(props.date).toLocaleDateString();
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
            @input="updateCell"
            class="py-3 px-6 focus:ring-0 transition-colors absolute inset-0 w-48
            z-60 bg-gray-50 border-gray-500"
            type="date"
            :value="date"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ formattedDate }}
        </div>
    </td>
</template>
