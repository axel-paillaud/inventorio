<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TableLayout from '@/Layouts/TableLayout.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
import { useTableStore } from '@/stores/table';

const props = defineProps(['table']);
const store = useTableStore();
store.table = props.table;

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <p>{{ table }}</p>
        <div class="overflow-auto">
            <main
                class="pt-12 pb-32 mx-auto px-4 sm:px-8 lg:px-12 flex
                gap-y-10 flex-col"
            >
                <div
                    class="flex 2xl:flex-row flex-col z-10 gap-12
                    justify-center"
                >
                    <TableLayout />
                    <TableLayout />
                </div>
                <div
                    class="flex 2xl:flex-row flex-col z-10 gap-12
                    justify-center"
                >
                    <TableLayout />
                    <TableLayout />
                </div>
            </main>
        </div>

        <Footer />

    </AuthenticatedLayout>
</template>
