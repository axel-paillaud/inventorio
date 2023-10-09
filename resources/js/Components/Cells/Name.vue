<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    name: String,
    rowId: Number,
});

const isActive = ref(false);

const closeOnEscape = (e) => {
    if (isActive.value && (e.key === "Escape" || e.key === "Enter")) {
        isActive.value = false;
    }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    @click="isActive = true"
    >
        <!-- Full Screen Overlay -->
        <div
            v-show="isActive"
            class="fixed inset-0 z-50 cursor-default"
            @click.stop="isActive = false"
        >
        </div>
        <span
            v-show="isActive"
            class="py-3 px-6 absolute inset-0 w-full z-60 h-fit min-h-full
            bg-gray-50 border-gray-500"
            role="textbox"
            contenteditable="true"
        >
            {{ name }}
        </span>
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ name }}
        </div>
</td>
</template>
