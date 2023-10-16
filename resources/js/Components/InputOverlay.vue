<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { emitCloseOnEscape } from '@/Composables/closeCell';
const emit = defineEmits(['closeCell']);

const props = defineProps({
    isActive: Boolean,
});

// const closeOnEscape = (e) => {
//     if (props.isActive && (e.key === "Escape" || e.key === "Enter")) {
//         console.log("hello");
//         emit('closeCell');
//     }
// }
//
// onMounted(() => document.addEventListener('keydown', closeOnEscape));
// onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));


emitCloseOnEscape(emit, props.isActive);
// emitCloseOnEnter(emit, props.isActive);

</script>

<template>
    <div
        data-testid="overlay"
        v-if="isActive"
        class="fixed inset-0 z-50 cursor-default"
        @click.stop="$emit('closeCell')"
    ></div>
</template>
