<script setup>
import { onMounted, onUnmounted } from 'vue';
import { emitCloseOnEscape } from '@/Composables/close';
const emit = defineEmits(['closeCell']);

const props = defineProps({
    isActive: Boolean,
});

const closeOnEscape = (e) => {
    if (props.isActive && (e.key === "Escape" || e.key === "Enter")) {
        console.log("hello");
        emit('closeCell');
    }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));


//emitCloseOnEscape(emit, props.isActive);
//emitCloseOnEnter(emit, props.isActive);

</script>

<template>
    <div
        data-testid="overlay"
        v-show="isActive"
        class="fixed inset-0 z-50 cursor-default"
        @click.stop="$emit('closeCell')"
    ></div>
</template>
