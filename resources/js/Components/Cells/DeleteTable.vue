<script setup>
import { ref } from 'vue';
import axios from 'axios';
import DialogModal from '@/Components//DialogModal.vue';
import { Trash } from 'lucide-vue-next';

const props = defineProps({
    tableId: Number,
    isRowHover: Boolean,
});

const emit = defineEmits(['deleteTableEvent', 'errorDeleteTableEvent']);

const dialogModal = ref(null);

function submit() {
    axios.post('inventorio/api/table/delete', {id: props.tableId})
        .then((res) => emit('deleteTableEvent', res.data))
        .catch((err) => emit('errorDeleteTableEvent', err));
}

</script>

<template>
    <td class="group border-b border-b-gray-100 h-full w-10"
    >
        <div
            class="relative z-40 hover:bg-red-200 transition-all rounded-r-md flex
            right-8 group-hover:right-px group-hover:bg-red-200 h-full max-w-10
            group-hover:justify-center"
            :class="isRowHover ? 'bg-red-200' : ''"
        >
            <button
                @click="dialogModal.modal.showModal()"
                class="px-2"
            >
                <Trash size="16" stroke-width="2.5" color="#a51d2d"/>
            </button>
        </div>
    </td>
    <Teleport to="body">
        <DialogModal ref="dialogModal">

        </DialogModal>
    </Teleport>
</template>

