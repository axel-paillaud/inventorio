<script setup>
import { ref } from 'vue';
import { SortTable } from '@/Services/TableService';
import Header from '@/Components/Header.vue';
import Table from '@/Components/Table.vue';
import Row from '@/Components/Row.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps([
    'tables', 'rows', 'dateType', 'year', 'month', 'day', 'errors',
]);

const tables = ref(new SortTable(props.tables, props.rows).associateRowToTable());

const setActiveTable = (tableId) => {
    let table = tables.value.find(table => table.id === tableId);
    table.isActive = !table.isActive;
}

const setActiveAllTable = () => {
    tables.value.forEach((table) => {
        table.isActive = true;
    });
}

</script>

<template>
    <Head title="Home" />

    <div class="h-full bg-gray-100">
        <Header
            :dateType="dateType"
            :year="year"
            :month="month"
            :day="day"
        />
    </div>

    <!-- Show form validation error from Laravel for debugging -->
    <div v-if="errors">{{ errors }}</div>

    <div class="overflow-auto">
        <main
            class="pt-12 pb-32 mx-auto px-4 sm:px-8 lg:px-12 flex
            gap-10 flex-wrap flex-col xl:flex-row"
        >
            <template v-for="table in tables" :key="'table' + table.id">
                <Transition>
                    <Table
                        v-if="table.isActive"
                        :tableId="table.id"
                        :rows="table.rows"
                        :color="table.color"
                        :name="table.name"
                        :total="table.total"
                    >
                        <Row
                            v-for="row in table.rows"
                            :key="row.id" :rowId="row.id"
                            :date="row.date"
                            :name="row.name"
                            :state="row.state"
                            :quantity="row.quantity"
                            :price="row.price"
                            @updateTotal="(updatedTotal) => row.total = updatedTotal"
                        />
                    </Table>
                </Transition>
            </template>
        </main>
    </div>

    <Footer
        :tables="tables"
        @toggleTable="setActiveTable"
        @toggleAllTable="setActiveAllTable"
    />
</template>

<style scoped>
/* Table animation when toggle */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.4s ease, scale 0.4s ease;
}

.v-enter-from,
.v-leave-to {
    scale: 0.95;
    opacity: 0;
}
</style>
