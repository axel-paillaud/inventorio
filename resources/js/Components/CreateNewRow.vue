<script setup>
import { ref } from 'vue';
import { Plus } from 'lucide-vue-next';

const dialog = ref(null);
const formIsActive = ref(false);

</script>

<template>
    <td class="td-last-row">
        <dialog
            ref="dialog"
        >
            <p>hello</p>
        </dialog>
        <div
            @click="dialog.showModal()"
            class="rounded-full hover:bg-gray-100 p-1.5 w-fit
            cursor-pointer horizontal-center"
        >
            <Plus size="20" />
        </div>
    </td>
</template>
