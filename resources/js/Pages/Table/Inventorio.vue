<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/Components/Header.vue';
import Table from '@/Components/Table.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
import { Transition } from 'vue';

const props = defineProps([
    'tables', 'dateType', 'year', 'month', 'day', 'errors',
]);

const tables = ref(props.tables);

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

    <Header
        :dateType="dateType"
        :year="year"
        :month="month"
        :day="day"
/>

    <!-- Show form validation error-->
        <div
            v-for="error in errors"
            class="fixed bg-red-200 z-40 w-full px-4 sm:px-8 lg:px-12 py-3 font-bold"
        >
            {{ error }}
        </div>

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
                        :rows="table.table_rows"
                        :year="year"
                        :month="month"
                        :day="day"
                        :color="table.color"
                        :name="table.name"
                    >
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
