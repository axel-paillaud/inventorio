<script setup>
import { ref } from 'vue';
import { useFetch, useRefreshFetch } from '../Composables/fetch.js';
import Row from '@/Components/Row.vue';
import Total from '@/Components/Cells/TableTotal.vue';
import CreateNewRow from '@/Components/CreateNewRow.vue';
import colors from '@/Services/ColorService';

const props = defineProps({
    currentFilterDate: String,
    year: Number,
    month: Number,
    day: Number,
    tableId: Number,
    name: String,
    color: {type: String, default: 'gray'},
    total: Number,
});

let url = `/api/inventorio/${props.tableId}`;
if (props.year) {
    url += `/${props.year}`;
    if (props.month) {
        url += `/${props.month}`;
        if(props.day) {
            url += `/${props.day}`;
        }
    }
}

let { data: rows, error } = useFetch(url);

const tableContainer = ref(null);

const createNewRow = () => {
    useRefreshFetch(url, rows, error)
        .then(() => tableContainer.value.scrollTop = 999999 );
 }

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
                            @create-new-row-event="createNewRow"
                            :currentFilterDate="currentFilterDate"
                            :tableId="tableId"
                        />
                        <td class="td-last-row" colspan="4">Total</td>
                        <Total v-if="rows" :total="total" :rows="rows"/>
                    </tr>
                </tfoot>
                <tbody>
                    <Row
                        v-if="rows"
                        v-for="row in rows"
                        :key="row.id" :rowId="row.id"
                        :date="row.date"
                        :name="row.name"
                        :state="row.state"
                        :quantity="row.quantity"
                        :price="row.price"
                        @updateTotal="(updatedTotal) => row.total = updatedTotal"
                    />
                    <tr v-if="error" class="text-red-500 text-center">
                        <td colspan="6"><p class="p-2">Oups ! Une erreur est survenue. Message d'erreur :</p></td>
                    </tr>
                    <tr v-if="error" class="text-red-500 text-center">
                        <td colspan="6"><p class="p-2">{{ error }}</p></td>
                    </tr>
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
