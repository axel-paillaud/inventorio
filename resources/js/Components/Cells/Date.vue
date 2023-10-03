<script setup>
import { ref } from 'vue';

const props = defineProps({
    date: String
});

const show = ref(false);

// Maybe use computed here when we need to update date in real time
const formattedDate = new Date(props.date).toLocaleDateString();

</script>

<template>
<td
    class="p-0 border border-white border-b border-b-gray-100 relative
        transition-colors cursor-text hover:bg-gray-100 hover:border-t-gray-100
        hover:border-r-gray-200 hover:border-l-200"
    @click="show = true"
>
    <input
        class="py-3 px-6 focus:ring-0 transition-colros absolute inset-0 w-48
            z-30"
        :class="{ hidden: !show}"
        type="date"
        :value="date"
    >
    <div class="py-3 px-6" :class="{ invisible: show }">
        {{ formattedDate }}
    </div>
</td>
</template>
