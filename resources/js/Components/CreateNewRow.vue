<script setup>
import { useForm } from '@inertiajs-fix-scroll/vue3';
import { Plus } from 'lucide-vue-next';

const props = defineProps({
    tableId: Number,
    currentFilterDate: String,
});

const emit = defineEmits(['createNewRowEvent']);

const form = useForm({
    table_id: props.tableId,
    date: props.currentFilterDate
});

console.log("test");

function createNewRow() {
    form.post('/inventorio/row/create', {
        resetOnSuccess: false,
        preserveScroll: true,
        preserveState: true,
        only: ['rows'],
        onSuccess: page => { console.log(page); emit('createNewRowEvent'); },
    });
}

</script>

<template>
    <td class="td-last-row">
        <div
            @click="createNewRow"
            class="rounded-full hover:bg-gray-100 p-1.5 w-fit
            cursor-pointer horizontal-center"
        >
            <Plus size="20" />
        </div>
    </td>
</template>
