<script setup>
import { ref, reactive } from 'vue';
import { router } from '@inertiajs/vue3';
import InputOverlay from '@/Components/InputOverlay.vue';

const props = defineProps({
    name: String,
    rowId: Number,
});

const isActive = ref(false);
const name = ref(props.name);

const form = ref({
    row_id: props.rowId,
    name: props.name,
});

// watch(name, (newName, oldName) => {
//     if (newName.length < 255) {
//         name.value = newName;
//     } else {
//         name.value = oldName;
//     }
// });

function submitCellData() {
    router.post('/inventorio/cells/name', form.value);
}

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
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
            v-model="name"
        >
            {{ name }}
        </textarea>
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ name }}
        </div>
</td>
</template>
