<script setup>
import { ref, computed, watch } from 'vue';
import InputOverlay from '@/Components/InputOverlay.vue';
import { isDateValid } from '@/Composables/validators/date';
import { router } from '@inertiajs/vue3';

const props = defineProps({
    date: String,
    rowId: Number,
});

const isActive = ref(false);
const date = ref(props.date);

// watch(date, (newDate, oldDate) => {
//     if (isDateValid(date)) {
//         date.value = newDate;
//     } else {
//         date.value = oldDate;
//     }
// });

const formattedDate = computed(() => {
    console.log(date.value);
    return new Date(date.value).toLocaleDateString();
});

function submitCellData() {
    console.log("hello, franck!");
}

</script>

<template>
    <td
        @click="isActive = true"
        class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    >
        <InputOverlay :isActive="isActive"  @closeCell="isActive = false" />
        <form @submit.prevent="submitCellData">
            <input
                v-show="isActive"
                class="py-3 px-6 focus:ring-0 transition-colors absolute inset-0 w-48
                z-60 bg-gray-50 border-gray-500"
                type="date"
                v-model="date"
            >
        </form>
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ formattedDate }}
        </div>
    </td>
</template>
