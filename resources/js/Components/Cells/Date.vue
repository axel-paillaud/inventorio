<script setup>
import { ref, watch } from 'vue';
import { useTableStore } from '@/Stores/table';

const props = defineProps({
    date: String,
    rowId: Number,
});

const store = useTableStore();

const cellId = props.rowId + "Date";
store.addCells(cellId);

const currentCell = store.cells[cellId];

watch(() => currentCell.isActive, (newValue) => {
    if (newValue) {
        currentCell.isActive = true;
        for (const cell in store.cells) {
            if (cell !== cellId) {
                store.cells[cell].isActive = false;
            }
        }
    }
});

// Maybe use computed here when we need to update date in real time
const formattedDate = new Date(props.date).toLocaleDateString();

</script>

<template>
<td
    @click="currentCell.isActive = true"
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-100 hover:border-t-gray-100
        hover:border-r-gray-200 hover:border-l-200"
>
    <input
        v-show="currentCell.isActive"
        class="py-3 px-6 focus:ring-0 transition-colors absolute inset-0 w-48
            z-30"
        type="date"
        :value="date"
    >
    <div class="py-3 px-6" :class="{ invisible: currentCell.isActive }">
        {{ formattedDate }}
    </div>
</td>
</template>
