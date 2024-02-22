<script setup>
import { ref, watch } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { Plus, ChevronDown } from 'lucide-vue-next';
import Dropdown from '@/Components/Dropdown.vue';
import colors from '@/Services/ColorService.js';

const modal = ref(null);
const selectColor = ref(null);

const form = useForm({
    name: null,
    color: null,
});

watch(selectColor, (newColor) => {
    form.color = newColor.name;
});

const openModal = () => {
    modal.value.showModal();
}

function submit() {
    form.post('/inventorio/api/table/create', {
        preserveState: false,
    });
}

// extract to composable here
const closeModalWithBackdrop = (e) => {
    const modalDimensions = modal.value.getBoundingClientRect();
    if (
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
    ) {
        modal.value.close();
    }
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
        @click="closeModalWithBackdrop"
        class="rounded-md text-gray-700 backdrop:bg-stone-400 backdrop:opacity-60
        shadow-md overflow-visible animate-zoom-in"
    >
        <div class="px-16 py-8 border-b border-stone-300">
            Ajouter un nouveau tableau
        </div>
        <form
            method="dialog"
            class="px-16 py-12 flex flex-col gap-10"
        >
            <div class="flex flex-col gap-3">
                <label for="table-name">Nom du tableau</label>
                <input
                    v-model="form.name"
                    id="table-name"
                    required
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
                            hover:bg-gray-100 transition w-full justify-between"
                        >
                            <div
                                v-if="selectColor"
                                class="flex items-center justify-between w-full"
                            >
                                <button class="capitalize">{{ selectColor.name }}</button>
                                <div
                                    class="w-20 h-5 rounded"
                                    :class="selectColor.color">
                                </div>
                            </div>
                            <button v-else type="button">
                                Couleur
                            </button>
                            <ChevronDown :size="16" />
                        </span>
                    </template>

                    <template #content>
                        <div v-for="color in colors" @click="selectColor = color">
                            <div
                                class="px-3 py-2 flex items-center justify-between
                                hover:bg-gray-100 transition hover:cursor-pointer">
                                <span class="capitalize">{{ color.name }}</span>
                                <div class="w-20 h-5 rounded" :class="color.color"></div>
                            </div>
                        </div>
                    </template>
                </Dropdown>
            </div>
            <button
                class="border border-stone-300 rounded px-3 py-2 bg-white
                hover:bg-gray-100 transition mb-2"
                type="submit"
                @click.prevent="submit"
                :disabled="form.processing"
            >
                Créer
            </button>
        </form>
    </dialog>
</template>
