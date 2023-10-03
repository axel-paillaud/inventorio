<script setup>
import { ref } from 'vue';

const props = defineProps({
    quantity: Number
});

const show = ref(false);

</script>

<template>
<td
    @click="show = true"
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-100 hover:border-t-gray-100
        hover:border-r-gray-200 hover:border-l-200"
    >
        <input
            class="py-3 px-6 w-full h-full focus:ring-0 absolute inset-0 z-30"
            :class="{ hidden: !show }"
            type="number"
            :value="quantity"
        >
        <div class="py-3 px-6" :class="{ hidden: show }">
            {{ quantity }}
        </div>

    </td>
</template>
