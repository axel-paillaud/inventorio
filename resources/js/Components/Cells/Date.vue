<script setup>
import { ref, reactive, computed } from 'vue';
import InputOverlay from '@/Components/InputOverlay.vue';
import { isDateValid } from '@/Composables/validators/date';
import { router } from '@inertiajs-fix-scroll/vue3';

const props = defineProps({
    date: String,
    rowId: Number,
});

const isActive = ref(false);

const formattedDate = computed(() => {
    return new Date(form.value.date).toLocaleDateString();
});

const form = ref({
    row_id: props.rowId,
    date: props.date
});

function submitCellData() {
    // add isDateValid() here
    router.post('/inventorio/cells/date', form.value);
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
