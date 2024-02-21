<script setup>
import { ref } from 'vue';
import { Plus, ChevronDown } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';

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
    <dialog
        ref="modal"
        class="rounded-md text-gray-700 backdrop:bg-stone-400 backdrop:opacity-60
        shadow-md overflow-visible"
    >
        <div class="px-16 py-6 border-b border-stone-300">
            Ajouter un nouveau tableau
        </div>
        <form
            method="dialog"
            class="px-16 py-8 flex flex-col gap-8"
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
                <Dropdown align="left">
                    <template #trigger>
                        <span
                            class="inline-flex rounded-md border border-stone-300
                            items-center px-3 py-2 gap-4 hover:cursor-pointer
                            hover:bg-gray-100 transition"
                        >
                            <button type="button">
                                Couleur
                            </button>
                            <ChevronDown :size="16" />
                        </span>
                    </template>

                    <template #content>
                        <div class="px-3 py-2 flex items-center justify-between
                        hover:bg-gray-100 transition hover:cursor-pointer">
                            <span>Rouge</span>
                            <div class="bg-red-700 w-20 h-5 rounded"></div>
                        </div>
                        <div class="px-3 py-2 flex items-center justify-between
                        hover:bg-gray-100 transition hover:cursor-pointer">
                            <span>Vert</span>
                            <div class="bg-green-700 w-20 h-5 rounded"></div>
                        </div>
                        <div class="px-3 py-2 flex items-center justify-between
                        hover:bg-gray-100 transition hover:cursor-pointer">
                            <span>Bleue</span>
                            <div class="bg-blue-700 w-20 h-5 rounded"></div>
                        </div>
                    </template>
                </Dropdown>
            </div>
            <button
                class="border border-stone-300 rounded px-3 py-2 bg-white
                hover:bg-gray-100 transition mb-2"
                type="submit"
            >Créer</button>
        </form>
    </dialog>
</template>
