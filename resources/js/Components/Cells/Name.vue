<script setup>
import { ref } from 'vue';

const props = defineProps({
    name: String
});

const show = ref(false);

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-100 hover:border-t-gray-100
        hover:border-r-gray-200 hover:border-l-200"
    @click="show = true"
    >
        <span
            class="py-3 px-6 absolute inset-0 w-full z-30 bg-white h-fit min-h-full"
            :class="{ hidden: !show }"
            role="textbox"
            contenteditable="true"
        >
            {{ name }}
        </span>
        <div class="py-3 px-6" :class="{ invisible: show }">
            {{ name }}
        </div>
</td>
</template>
