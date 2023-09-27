<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TableLayout from '@/Layouts/TableLayout.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
import { useTableStore } from '@/stores/table';

const props = defineProps(['tables', 'rows']);
const store = useTableStore();
store.tables = props.tables;
store.rows = props.rows;

const tablePairs = props.tables.toReversed();
console.log(props.tables);
console.log(tablePairs);

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="overflow-auto">
            <main
                class="pt-12 pb-32 mx-auto px-4 sm:px-8 lg:px-12 flex
                gap-y-10 flex-col"
            >
                <div
                    class="flex 2xl:flex-row flex-col z-10 gap-12
                    justify-center"
                >
                    <TableLayout
                        v-for="table in tables"
                        :key="table.id"
                    />
                </div>
            </main>
        </div>

        <Footer />

    </AuthenticatedLayout>
</template>
