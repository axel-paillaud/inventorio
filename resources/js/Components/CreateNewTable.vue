<script setup>
import { ref } from 'vue';
import { Plus } from 'lucide-vue-next';

const modal = ref(null);

const openModal = () => {
    modal.value.showModal();
}
</script>

<template>
    <button
        @click="openModal"
        class="flex items-center gap-1.5 px-3 py-2 border rounded
        hover:bg-gray-100"
    >
        Créer un tableau
        <Plus size="16"/>
    </button>
    <dialog ref="modal" class="rounded text-gray-700">
        <div class="px-16 py-6 border-b">
            Ajouter un nouveau tableau
        </div>
        <form
            method="dialog"
            class="px-16 py-6 flex flex-col gap-6"
        >
            <div class="flex flex-col gap-2">
                <label for="table-name">Nom du tableau</label>
                <input
                    id="table-name"
                    class="rounded border-stone-300"
                    type="text"
                    autofocus
                >
            </div>
            <div class="flex flex-col gap-2">
                <label for="color-select">Couleur</label>
                <select name="" id="color-select">
                    <option value="red">Rouge</option>
                    <option value="blue">Bleue</option>
                    <option value="green">Vert</option>
                </select>
            </div>
            <button type="submit">Créer</button>
        </form>
    </dialog>
</template>
