<script setup>
import { ref, computed } from 'vue';
import useFocus from '@/Composables/focus';
import InputOverlay from '@/Components/InputOverlay.vue';
import { isDateValid } from '@/Composables/validators/date';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    date: String,
    rowId: Number,
});

const emit = defineEmits(['errorDate']);

const isActive = ref(false);
const inputDate = ref(null);

useFocus(isActive, inputDate);

let initDate = props.date;

const formattedDate = computed(() => {
    return new Date(form.date).toLocaleDateString();
});

const form = useForm({
    row_id: props.rowId,
    date: props.date,
});

function submitCellData() {
    form.post('/inventorio/cells/date', {
        preserveScroll: true,
        onError: (error) => {
            emit('errorDate', error.date);
            form.date = initDate;
        },
        onSuccess: () => initDate = form.date,
    });
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
        <input
            ref="inputDate"
            @change="submitCellData"
            v-show="isActive"
            class="py-3 px-6 focus:ring-0 transition-colors absolute inset-0 w-48
            z-60 bg-gray-50 border-gray-500"
            type="date"
            v-model="form.date"
            name="date"
        >
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ formattedDate }}
        </div>
    </td>
</template>
