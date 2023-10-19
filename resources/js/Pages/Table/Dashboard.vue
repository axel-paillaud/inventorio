<script setup>
// import { associateRowToTable, createTablePairs } from '@/Services/TableService';
import { SortTable } from '@/Services/TableService';
import { createPairs } from '@/Composables/sort';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Table from '@/Components/Table.vue';
import Row from '@/Components/Row.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps(['tables', 'rows']);

const tables = new SortTable(props.tables, props.rows).associateRowToTable();

const tablePairs = createPairs(tables);

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="overflow-auto">
            <main
                class="pt-12 pb-32 mx-auto px-4 sm:px-8 lg:px-12 flex
                gap-y-10 flex-col"
            >
                <template v-for="tablePair in tablePairs">
                    <div
                        class="flex 2xl:flex-row flex-col gap-12
                        justify-center"
                    >
                        <Table
                            v-for="table in tablePair"
                            :key="'table' + table.id"
                            :rows="table.rows"
                            :color="table.color"
                            :name="table.name"
                            :total="table.total"
                        >
                            <Row
                                v-for="row in table.rows"
                                :key="row.id"
                                :date="row.date"
                                :name="row.name"
                                :state="row.state"
                                :quantity="row.quantity"
                                :price="row.price"
                                @updateTotal="(updatedTotal) => row.total = updatedTotal"
                            />
                        </Table>
                    </div>
                </template>
            </main>
        </div>

        <Footer :tables="tables" />

    </AuthenticatedLayout>
</template>
