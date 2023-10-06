<script setup>
import { formatter } from '@/Services/FormatService';
import { useTableStore } from '@/Stores/table';
import watchCurrentCellState from '@/Services/WatchCurrentCellStateService.js';

const props = defineProps({
    price: Number,
    rowId: Number,
});

const store = useTableStore();

const cellId = props.rowId + "Price";
store.addCells(cellId);

const currentCell = store.cells[cellId];

watchCurrentCellState(currentCell, store, cellId);

const formattedPrice = formatter.format(props.price);

</script>

<template>
    <td
        @click="currentCell.isActive = true"
        class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    >
        <input
            class="py-3 px-6 w-full h-full focus:ring-0 absolute inset-0 z-30
            bg-gray-50 border-gray-500"
            v-show="currentCell.isActive"
            type="number"
            :value="price"
        >
        <div class="py-3 px-6" :class="{ invisible: currentCell.isActive }">
            {{ formattedPrice }}
        </div>
    </td>
</template>
