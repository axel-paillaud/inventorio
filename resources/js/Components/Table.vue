<script setup>
import { ref, onMounted } from 'vue';
import Total from '@/Components/Cells/TableTotal.vue';
import CreateNewRow from '@/Components/CreateNewRow.vue';
import colors from '@/Services/ColorService';

const props = defineProps({
    currentFilterDate: String,
    tableId: Number,
    name: String,
    rows: Array,
    color: {type: String, default: 'gray'},
    total: Number,
});

const tableContainer = ref(null);

onMounted(() => {
    tableContainer.value.addEventListener('scroll', () => {
        console.log(tableContainer.value.scrollTop);
    });
});

</script>

<template>
    <div class="basis-full xl:basis-4/12 grow">
        <p
            class="px-6 py-1"
            :class="colors[color].title"
        >
            {{ name }}
        </p>
        <div
            ref="tableContainer"
            class="max-h-[65vh] border overflow-auto shadow-md rounded-lg relative"
            scroll-region
        >
            <table
                class="bg-white sm:rounded-lg w-full
                border border-separate border-spacing-0"
            >
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
                        <CreateNewRow
                            :currentFilterDate="currentFilterDate"
                            :tableId="tableId"
                        />
                        <td class="td-last-row" colspan="4">Total</td>
                        <Total :total="total" :rows="rows"/>
                    </tr>
                </tfoot>
                <tbody>
                    <slot />
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

.td-last-row {
    padding: 12px 24px;
    border-top: solid 1px var(--gray-200);
}
</style>
