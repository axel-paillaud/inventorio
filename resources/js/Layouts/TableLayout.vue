<script setup>
import { Plus } from 'lucide-vue-next';
</script>

<template>
    <p class="px-6 py-1 text-lime-700">Pièces détachées</p>
    <div class="h-4/6 border overflow-auto shadow-md rounded-lg relative">
        <table
            class="bg-white shadow-md sm:rounded-lg w-full
            border border-separate border-spacing-0"
        >
            <thead class="text-left bg-lime-100 sticky top-0">
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
                <tr v-for="n in 20">
                    <td class="td td-first">
                        <input
                            class="input-cell w-full focus:ring-0"
                            type="date"
                        >
                    </td>
                    <td class="td">
                        <input
                            class="input-cell w-full focus:ring-0"
                            type="text"
                            value="Lame de ressort"
                        >
                    </td>
                    <td class="td">
                        <input
                            class="input-cell w-full focus:ring-0"
                            type="text"
                            value="Occasion"
                        >
                    </td>
                    <td class="td">
                        <input
                            class="input-cell w-full focus:ring-0"
                            type="number"
                            value="2"
                        >
                    </td>
                    <td class="td">
                        <input
                            class="input-cell w-full focus:ring-0"
                            type="number"
                            value="150"
                        >
                    </td>
                    <td class="td">
                        <div class="fixed-cell">300</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.thead {
    padding: 12px 24px;
    border-bottom: 1px solid #e5e7eb;
}

.td {
    padding: 0;
}

.input-cell {
    padding: 12px 24px;
    border: 1px solid white;
    border-bottom-color: #e5e7eb;
    transition: all 0.2s ease;
    transition: background-color 0.2s ease;
}

.input-cell:focus {
    border-left-color: #e5e7eb;
    border-right-color: #e5e7eb;
    border-top-color: #f3f4f6;
    background-color: #f3f4f6;
}

.input-cell:hover {
    border-left-color: #e5e7eb;
    border-right-color: #e5e7eb;
    border-top-color: #f3f4f6;
    background-color: #f3f4f6;
}

.fixed-cell {
    padding: 12px 24px;
    border-bottom: 1px solid #e5e7eb;
}

.td-first:hover {
    border-left-color: #f3f4f6;
    border-right-color: #e5e7eb;
}

.td-last:hover {
    border-left-color: #e5e7eb;
    border-right-color: #f3f4f6;
}

.td-last-row {
    padding: 12px 24px;
    border-top: solid 1px #e5e7eb;
}
</style>
