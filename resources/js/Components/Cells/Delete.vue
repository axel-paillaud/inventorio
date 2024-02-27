<script setup>
import { ref, onMounted, watch } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { Trash } from 'lucide-vue-next';

const props = defineProps({
    rowId: Number,
});

const cell = ref(null);
const container = ref(null);

onMounted(() => {
    // const height = ref(cell.value.clientHeight);
    // container.value.style.height = `${cell.value.clientHeight}px`;
});

</script>

<template>
    <td ref="cell" class="group border-b border-b-gray-100 h-full"
    >
        <div ref="container"
            class="relative hover:bg-red-100 transition-all rounded-r-md flex
            right-8 group-hover:right-0 group-hover:bg-red-100 h-full"
        >
            <button
                class="px-2"
            >
                <Trash size="20" stroke-width="2.5" color="#a51d2d"/>
            </button>
        </div>
    </td>
</template>
