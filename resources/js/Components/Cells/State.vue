<script setup>
import { ref } from 'vue';
import { useTableStore } from '@/Stores/table';
import watchCurrentCellState from '@/Services/WatchCurrentCellStateService.js';

const props = defineProps({
    state: String,
    rowId: Number,
});

const store = useTableStore();

const cellId = props.rowId + "State";
store.addCells(cellId);

const currentCell = store.cells[cellId];

watchCurrentCellState(currentCell, store, cellId);

const currentState = ref(props.state);

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-100 hover:border-t-gray-100
        hover:border-r-gray-200 hover:border-l-200"
        @click="currentCell.isActive = true"
    >
        <select
            v-show="currentCell.isActive"
            class="py-3 px-6 w-full focus:ring-0 absolute inset-0 z-30 min-w-[130px]"
            v-model="currentState"
        >
            <option value="Neuf">Neuf</option>
            <option value="Occasion">Occasion</option>
            <option value="A réparer">A réparer</option>
        </select>

        <div class="py-3 px-6 whitespace-nowrap"
            :class="{ invisible: currentCell.isActive }"
        >
            {{ state }}
        </div>
</td>
</template>
