<script setup>
import { computed } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Table from '@/Components/Table.vue';
import Row from '@/Components/Row.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
import { useTableStore } from '@/Stores/table';

const props = defineProps(['tables', 'rows']);
const store = useTableStore();
store.tables = props.tables;
store.rows = props.rows;

store.computeTotalRow();

// Add corresponding rows to table
const tables = computed(() => {
    let tables = props.tables;
    tables.forEach((table) => {
        table.rows = [];
        props.rows.forEach((row) => {
            if (table.id === row.table_id) {
                table.rows.push(row);
            }
        });
    });
    return tables;
});

// Sort table by pair of 2, to display 2 tables per container <div>
const tablePairs = computed(() => {
    let tablePairs = [];
    let index = 0;
    tablePairs[index] = [];
    tables.value.forEach((table) => {
        if (tablePairs[index].length < 2) {
            tablePairs[index].push(table);
        }
        else {
            index++;
            tablePairs[index] = [];
            tablePairs[index].push(table);
        }
    });
    return tablePairs;
});

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="overflow-auto">
            <main
                class="pt-12 pb-32 mx-auto px-4 sm:px-8 lg:px-12 flex
                gap-y-10 flex-col"
            >
                <template v-for="tablePair, index in tablePairs" :key="index">
                    <div
                        class="flex 2xl:flex-row flex-col z-10 gap-12
                        justify-center"
                    >
                        <Table
                            v-for="table in tablePair"
                            :key="table.id"
                            :rows="table.rows"
                            :color="table.color"
                            :name="table.name"
                        >
                            <Row
                                v-for="row in table.rows"
                                :key="row.id"
                                :date="row.date"
                                :name="row.name"
                                :state="row.state"
                                :quantity="row.quantity"
                                :price="row.price"
                            />
                        </Table>
                    </div>
                </template>
            </main>
        </div>

        <Footer />

    </AuthenticatedLayout>
</template>
