<script setup>
import { computed } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TableLayout from '@/Layouts/TableLayout.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
import { useTableStore } from '@/stores/table';

const props = defineProps(['tables', 'rows']);
const store = useTableStore();
store.tables = props.tables;
store.rows = props.rows;

console.log(props.tables);

// Add corresponding rows to table
const tables = computed(() => {
    let tables = props.tables;
    let rows = props.rows;
    tables.forEach((table) => {
        table.rows = [];
        rows.forEach((row) => {
            if (table.id === row.table_id) {
                table.rows.push(row);
            }
        });
    });
    return tables;
});

console.log(tables.value);

// Sort table by pair of 2, to display 2 tables per container <div>
const tablePairs = computed(() => {
    let tablePairs = [];
    let index = 0;
    tablePairs[index] = [];
    props.tables.forEach((table) => {
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
                <template v-for="(tablePair, index) in tablePairs" :key="index">
                    <div
                        class="flex 2xl:flex-row flex-col z-10 gap-12
                        justify-center"
                    >
                        <TableLayout
                            v-for="table in tablePair"
                            :key="table.id"
                        />
                    </div>
                </template>
            </main>
        </div>

        <Footer />

    </AuthenticatedLayout>
</template>
