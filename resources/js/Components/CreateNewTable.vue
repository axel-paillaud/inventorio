<script setup>
import { ref } from 'vue';
import { Plus } from 'lucide-vue-next';

const showModal = ref(false);

const triggerModal = () => {
    showModal.value = !showModal.value;
}
</script>

<template>
    <button
        @click="triggerModal"
        class="flex items-center gap-1.5 px-3 py-2 border rounded
        hover:bg-gray-100"
    >
        Créer un tableau
        <Plus size="16"/>
    </button>
</template>
