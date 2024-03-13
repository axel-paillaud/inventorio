<script setup>
import { ref } from 'vue';
import useCloseModalWithBackdrop from '@/Composables/closeModal.js';

const modal = ref(null);

const { closeModalWithBackdrop } = useCloseModalWithBackdrop(modal);

defineExpose({
    modal,
});

</script>

<template>
    <dialog
        ref="modal"
        @click="closeModalWithBackdrop"
        class="rounded-md text-gray-700 backdrop:bg-stone-400 backdrop:opacity-60
        shadow-md overflow-visible animate-zoom-in"
    >
        <slot>
            <div class="py-2 px-3">Default modal content</div>
        </slot>
    </dialog>
</template>
