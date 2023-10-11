<script setup>
import { ref } from 'vue';
import InputOverlay from '@/Components/InputOverlay.vue';

const props = defineProps({
    name: String,
});

const isActive = ref(false);
const name = ref(props.name);

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-50 hover:border-t-gray-50
        hover:border-r-gray-200 hover:border-l-gray-200"
    @click="isActive = true"
    >
        <InputOverlay :isActive="isActive" @closeCell="isActive = false" />
        <textarea
            v-show="isActive"
            class="py-3 px-6 absolute top-0 left-0 w-full z-60 h-fit min-h-full
            bg-gray-50 border-gray-500"
            role="textbox"
            contenteditable="true"
            v-model="name"
        >
            {{ name }}
        </textarea>
        <div class="py-3 px-6" :class="{ invisible: isActive }">
            {{ name }}
        </div>
</td>
</template>
