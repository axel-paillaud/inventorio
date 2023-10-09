<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    state: String,
});

const isActive = ref(false);
const currentState = ref(props.state);

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
            class="fixed inset-0 z-50"
            @click.stop="isActive = false"
        >
        </div>
        <select
            v-show="isActive"
            class="py-3 px-6 w-full focus:ring-0 absolute inset-0 z-60 min-w-[130px]
            bg-gray-50 border-gray-500"
            v-model="currentState"
        >
            <option value="Neuf">Neuf</option>
            <option value="Occasion">Occasion</option>
            <option value="A réparer">A réparer</option>
        </select>

        <div class="py-3 px-6 whitespace-nowrap"
            :class="{ invisible: isActive }"
        >
            {{ state }}
        </div>
</td>
</template>
