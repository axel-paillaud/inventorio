<script setup>
import { ref } from 'vue';
import { useTableStore } from '@/Stores/table';
import watchCurrentCellState from '@/Services/WatchCurrentCellStateService.js';

const props = defineProps({
    name: String,
    rowId: Number,
});

const store = useTableStore();

const cellId = props.rowId + "Name";
store.addCells(cellId);

const currentCell = store.cells[cellId];

watchCurrentCellState(currentCell, store, cellId);

const show = ref(false);

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    @click="currentCell.isActive = true"
    >
        <span
            v-show="currentCell.isActive"
            class="py-3 px-6 absolute inset-0 w-full z-30 h-fit min-h-full
            bg-gray-50 border-gray-500"
            role="textbox"
            contenteditable="true"
        >
            {{ name }}
        </span>
        <div class="py-3 px-6" :class="{ invisible: currentCell.isActive }">
            {{ name }}
        </div>
</td>
</template>
