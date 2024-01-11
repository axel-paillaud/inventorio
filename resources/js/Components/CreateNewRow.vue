<script setup>
import { router } from '@inertiajs/vue3';
import { Plus } from 'lucide-vue-next';

const props = defineProps({
    tableId: Number,
});

function createNewRow() {
    router.post('/inventorio/table/create-row', { table_id: props.tableId });
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
