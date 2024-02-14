<script setup>
import axios from 'axios';
import { useForm } from '@inertiajs/vue3';
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

function createNewRow() {
/*     form.post('/inventorio/api/create', {
        resetOnSuccess: false,
        preserveScroll: true,
        preserveState: true,
        only: ['rows'],
        onSuccess: () => { emit('createNewRowEvent'); },
    }); */

    axios.post(
        '/inventorio/api/create',
        {table_id: props.tableId, date: props.currentFilterDate}
    )
        .then((res) => emit('createNewRowEvent', res.data))
        .catch((err) => console.log(err));

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
