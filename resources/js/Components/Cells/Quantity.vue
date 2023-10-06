<script setup>
import { useTableStore } from '@/Stores/table';
import watchCurrentCellState from '@/Services/WatchCurrentCellStateService.js';

const props = defineProps({
    quantity: Number,
    rowId: Number,
});

const store = useTableStore();

const cellId = props.rowId + "Quantity";
store.addCells(cellId);

const currentCell = store.cells[cellId];

watchCurrentCellState(currentCell, store, cellId);

</script>

<template>
<td
    @click="currentCell.isActive = true"
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-100 hover:border-t-gray-100
        hover:border-r-gray-200 hover:border-l-200"
    >
        <input
            class="py-3 px-6 w-full h-full focus:ring-0 absolute inset-0 z-30"
            v-show="currentCell.isActive"
            type="number"
            :value="quantity"
        >
        <div class="py-3 px-6" :class="{ invisible: currentCell.isActive }">
            {{ quantity }}
        </div>

    </td>
</template>
