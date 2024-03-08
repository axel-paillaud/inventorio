<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import useFocus from '@/Composables/useFocus';
import InputOverlay from '@/Components/InputOverlay.vue';

const props = defineProps({
    name: String,
    rowId: Number,
});

const emit = defineEmits(['errorName']);

const textarea = ref(null);
const isActive = ref(false);

useFocus(isActive, textarea);

let initName = props.name;


const form = useForm({
    row_id: props.rowId,
    name: props.name,
});

function submitCellData() {
    form.post('/inventorio/cells/name', {
        preserveScroll: true,
        onError: (error) => {
            emit('errorName', error.name);
            form.name = initName;
        },
        onSuccess: () => initName = form.name,
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
            ref="textarea"
            @change="submitCellData"
            v-show="isActive"
            class="py-3 px-6 absolute top-0 left-0 w-full z-60 h-fit min-h-full
            bg-gray-50 border-gray-500 max-h-40"
            maxlength="255"
            required
            role="textbox"
            v-model="form.name"
        >
            {{ form.name }}
        </textarea>
        <div
            class="py-3 max-h-44 overflow-hidden px-6 break-anywhere overflow-wrap"
            :class="{ invisible: isActive }"
        >
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
