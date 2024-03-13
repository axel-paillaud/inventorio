<script setup>
import axios from 'axios';
import { Trash } from 'lucide-vue-next';

const props = defineProps({
    rowId: Number,
    isRowHover: Boolean,
});

const emit = defineEmits(['deleteRowEvent', 'errorDeleteRowEvent']);

function submit() {
    axios.post(route('row.delete'), {row_id: props.rowId})
        .then((res) => emit('deleteRowEvent', res.data))
        .catch((err) => emit('errorDeleteRowEvent', err));
}

</script>

<template>
    <td ref="cell" class="group border-b border-b-gray-100 h-full w-10"
    >
        <form
            class="relative hover:bg-red-100 transition-all rounded-r-md flex
            right-8 group-hover:right-px group-hover:bg-red-100 h-full max-w-10
            group-hover:justify-center"
            :class="isRowHover ? 'bg-red-100' : ''"
        >
            <button
                @click.prevent="submit"
                type="submit"
                class="px-2"
            >
                <Trash size="20" stroke-width="2.5" color="#a51d2d"/>
            </button>
        </form>
    </td>
</template>

