<script setup>
import { Plus } from 'lucide-vue-next';

const props = defineProps({
    name: String,
    color: {type: String, default: 'gray'},
    total: Number,
});

const colors = {
    green: {title: 'text-green-700', bg: 'bg-green-100'},
    blue: {title: 'text-blue-700', bg: 'bg-blue-100'},
    red: {title: 'text-red-700', bg: 'bg-red-100'},
    orange: {title: 'text-orange-700', bg: 'bg-orange-100'},
}

</script>

<template>
    <div class="overflow-auto w-full">
        <p
            class="px-6 py-1"
            :class="colors[color].title"
        >
            {{ name }}
        </p>
        <div class="max-h-[60vh] border overflow-auto shadow-md rounded-lg relative">
            <table
                class="bg-white shadow-md sm:rounded-lg w-full
                border border-separate border-spacing-0"
            >
                <thead
                    class="text-left sticky top-0 whitespace-nowrap"
                    :class="colors[color].bg"
                >
                    <tr>
                        <th class="thead">Date</th>
                        <th class="thead">Nom</th>
                        <th class="thead">État</th>
                        <th class="thead">Quantité</th>
                        <th class="thead">Prix Unitaire</th>
                        <th class="thead">Total</th>
                    </tr>
                </thead>
                <tfoot class="sticky bottom-0 bg-white">
                    <tr>
                        <td class="td-last-row">
                            <div
                                class="rounded-full hover:bg-gray-100 p-1.5 w-fit
                                cursor-pointer horizontal-center"
                            >
                                <Plus size="20"/>
                            </div>
                        </td>
                        <td class="td-last-row" colspan="4">Total</td>
                        <td class="td-last-row td-total" colspan="1">128 000</td>
                    </tr>
                </tfoot>
                <tbody>
                    <slot />
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
.thead {
    padding: 12px 24px;
    border-bottom: 1px solid #e5e7eb;
}

.td {
    padding: 0;
    border: 1px solid white;
    border-bottom: 1px solid var(--gray-100);
    transition: background-color 0.2s ease;
}

.td:hover {
    border-top: 1px solid var(--gray-100);
    border-left: 1px solid var(--gray-200);
    border-right: 1px solid var(--gray-200);
    background-color: var(--gray-100);
}

.td-total {
    white-space: nowrap;
}

input {
    display: none;
}

.input-cell {
    padding: 12px 24px;
    border: 1px solid white;
    border-bottom-color: var(--gray-200);
    transition: all 0.2s ease;
    transition: background-color 0.2s ease;
}

.input-cell:focus {
    border-left-color: var(--gray-200);
    border-right-color: var(--gray-200);
    border-top-color: var(--gray-100);
    background-color: var(--gray-100);
}

.input-cell:hover {
    border-left-color: var(--gray-200);
    border-right-color: var(--gray-200);
    border-top-color: var(--gray-100);
    background-color: var(--gray-100);
}

.fixed-cell {
    padding: 12px 24px;
    max-height: 145px;
    overflow: hidden;
}

.td-first:hover {
    border-left-color: var(--gray-100);
    border-right-color: var(--gray-200);
}

.td-last:hover {
    border-left-color: va(--gray-200);
    border-right-color: var(--gray-100);
}

.td-last-row {
    padding: 12px 24px;
    border-top: solid 1px var(--gray-200);
}
</style>
