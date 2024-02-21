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
    <dialog r
        ef="modal"
        class="rounded-md text-gray-700 backdrop:bg-stone-400 backdrop:opacity-60 shadow-md"
    >
        <div class="px-16 py-6 border-b border-stone-300">
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
            <button
                class="border border-stone-300 rounded px-3 py-2 mt-4 bg-white hover:bg-gray-100"
                type="submit"
            >Créer</button>
        </form>
    </dialog>
</template>
