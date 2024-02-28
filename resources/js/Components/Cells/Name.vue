<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import InputOverlay from '@/Components/InputOverlay.vue';

const props = defineProps({
    name: String,
    rowId: Number,
});

const isActive = ref(false);

const form = useForm({
    row_id: props.rowId,
    name: props.name,
});

function submitCellData() {
    form.post('/inventorio/cells/name', {
        preserveScroll: true,
    });
}

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200 min-w-40"
    @click="isActive = true"
    >
        <InputOverlay :isActive="isActive" @closeCell="isActive = false" />
        <textarea
            @change="submitCellData"
            v-show="isActive"
            class="py-3 px-6 absolute top-0 left-0 w-full z-60 h-fit min-h-full
            bg-gray-50 border-gray-500"
            maxlength="255"
            required
            role="textbox"
            v-model="form.name"
        >
            {{ form.name }}
        </textarea>
        <div class="py-3 px-6 break-anywhere" :class="{ invisible: isActive }">
            {{ form.name }}
        </div>
</td>
</template>

<style scoped>

/* overflow-wrap: anywhere is currently not supported in Tailwindcss */
/* PR is validated, so it's coming soon */

.break-anywhere {
    overflow-wrap: anywhere;
}

</style>
