<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs-fix-scroll/vue3';
import InputOverlay from '@/Components/InputOverlay.vue';

const props = defineProps({
    state: String,
    rowId: Number,
});

const isActive = ref(false);

const form = ref({
    row_id: props.rowId,
    state: props.state
});

function submitCellData() {
    router.post('/inventorio/cells/state', form.value);
}

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
        @click="isActive = true"
    >
        <InputOverlay :isActive="isActive" @closeCell="isActive = false"/>
        <select
            @change="submitCellData"
            v-show="isActive"
            class="py-3 px-6 w-full focus:ring-0 absolute inset-0 z-60 min-w-[130px]
            bg-gray-50 border-gray-500"
            v-model="form.state"
        >
            <option value="Neuf">Neuf</option>
            <option value="Occasion">Occasion</option>
            <option value="A réparer">A réparer</option>
        </select>

        <div class="py-3 px-6 whitespace-nowrap"
            :class="{ invisible: isActive }"
        >
            {{ form.state }}
        </div>
</td>
</template>
