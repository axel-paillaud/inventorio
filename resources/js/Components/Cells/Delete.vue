<script setup>
import { useForm } from '@inertiajs/vue3';
import { Trash } from 'lucide-vue-next';

const props = defineProps({
    rowId: Number,
});

</script>

<template>
       <td class="border-b border-b-gray-100 hover:bg-red-100 transition">
        <button
            class="flex items-center justify-center w-full px-4"
        >
            <Trash size="20" stroke-width="2.5" color="#a51d2d"/>
        </button>
    </td>
</template>
