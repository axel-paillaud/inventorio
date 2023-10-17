<script setup>
import { Plus } from 'lucide-vue-next';
import Total from '@/Components/Cells/TableTotal.vue';
import colors from '@/Services/ColorService';

const props = defineProps({
    name: String,
    rows: Array,
    color: {type: String, default: 'gray'},
    total: Number,
});

</script>

<template>
    <div class="w-full">
            <table
                class="bg-white sm:rounded-lg w-full
                border border-separate border-spacing-0"
            >
                <caption
                    class="px-6 py-1 text-left"
                    :class="colors[color].title"
                >
                    {{ name }}
                </caption>

            <div class="max-h-[60vh] border overflow-auto shadow-md rounded-lg relative">
                <thead
                    class="text-left sticky top-0 whitespace-nowrap z-30
                    pointer-events-none"
                    :class="colors[color].bg"
                >
                    <tr>
                        <th class="py-3 px-6 border-b">Date</th>
                        <th class="py-3 px-6 border-b">Nom</th>
                        <th class="py-3 px-6 border-b">État</th>
                        <th class="py-3 px-6 border-b">Quantité</th>
                        <th class="py-3 px-6 border-b">Prix Unitaire</th>
                        <th class="py-3 px-6 border-b">Total</th>
                    </tr>
                </thead>
                <tfoot class="sticky bottom-0 bg-white z-30">
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
                        <Total :total="total" :rows="rows"/>
                    </tr>
                </tfoot>
                <tbody>
                    <slot />
                </tbody>
            </div>
        </table>
    </div>
</template>

<style scoped>

.td-last-row {
    padding: 12px 24px;
    border-top: solid 1px var(--gray-200);
}
</style>
