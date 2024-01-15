<script setup>
import { router } from '@inertiajs/vue3';
import { useForm } from '@inertiajs/vue3';
import { Plus } from 'lucide-vue-next';

const props = defineProps({
    tableId: Number,
});

const form = useForm({
    table_id: props.tableId,
});

const emit = defineEmits(['createRow']);

function createNewRow() {
    // router.post('/inventorio/row/create', { table_id: props.tableId });
    // emit('createRow');
    form.post('inventorio/row/create', {
        resetOnSuccess: false,
        preserveScroll: true,
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
