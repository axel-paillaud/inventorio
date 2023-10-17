<script setup>
import { onMounted, onUnmounted } from 'vue';
const emit = defineEmits(['closeCell']);

const props = defineProps({
    isActive: Boolean,
});

const closeOnEscape = (e) => {
    if (props.isActive && (e.key === "Escape" || e.key === "Enter")) {
        emit('closeCell');
    }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

</script>

<template>
    <Teleport to="body">
        <div
            data-testid="overlay"
            v-if="isActive"
            class="fixed inset-0 z-50 cursor-default"
            @click.stop="$emit('closeCell')"
        ></div>
    </Teleport>
</template>
