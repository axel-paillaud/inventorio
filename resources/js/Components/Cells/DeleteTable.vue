<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import DialogModal from '@/Components/DialogModal.vue';
import { Trash } from 'lucide-vue-next';

const props = defineProps({
    id: Number,
    name: String,
    isRowHover: Boolean,
});

const { t } = useI18n();

const emit = defineEmits(['deleteTableEvent', 'errorDeleteTableEvent']);

const dialogModal = ref(null);

function submit() {
    axios.post('inventorio/api/table/delete', {id: props.id})
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
            <div class="sm:px-16 sm:py-12 px-10 py-8 flex flex-col gap-10">
                <span>{{ t('table.delete.confirmMessage', { table: name }) }}</span>
                <div class="flex flex-col sm:flex-row gap-6 justify-evenly">
                    <button class="px-8 py-3 rounded bg-red-100 hover:bg-red-200 transition-colors capitalize">
                        {{ t('confirm.yes') }}
                    </button>
                    <button class="px-8 py-3 rounded bg-gray-200 hover:bg-gray-300 transition-colors capitalize">
                        {{ t('crud.cancel') }}
                    </button>
                </div>
            </div>
        </DialogModal>
    </Teleport>
</template>

