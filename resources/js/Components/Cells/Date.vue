<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useTableStore } from '@/Stores/table';
import watchCurrentCellState from '@/Services/WatchCurrentCellStateService.js';

const props = defineProps({
    date: String,
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

//const store = useTableStore();

//const cellId = props.rowId + "Date";
//store.addCells(cellId);

//const currentCell = store.cells[cellId];

//watchCurrentCellState(currentCell, store, cellId);

// Maybe use computed here when we need to update date in real time
const formattedDate = new Date(props.date).toLocaleDateString();

</script>

<template>
    <td
        @click="isActive = true"
        class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    >
        <!-- Overlay -->
        <div v-show="isActive"
            class="fixed inset-0 z-50 bg-red-500 opacity-30 cursor-default"
            @click.stop="isActive = false">
        </div>
        <input
            v-show="isActive"
            class="py-3 px-6 focus:ring-0 transition-colors absolute inset-0 w-48
            z-30 bg-gray-50 border-gray-500"
            type="date"
            :value="date"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ formattedDate }}
        </div>
    </td>
</template>
