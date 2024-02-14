<script setup>
import axios from 'axios';
import { Plus } from 'lucide-vue-next';

const props = defineProps({
    tableId: Number,
    currentFilterDate: String,
});

const emit = defineEmits(['createNewRowEvent']);

function createNewRow() {
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
