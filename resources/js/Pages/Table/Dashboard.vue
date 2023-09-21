<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TableLayout from '@/Layouts/TableLayout.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <main
            class="pt-12 pb-32 mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap
            gap-y-10 gap-x-12"
        >
            <div class="flex-auto basis-2/6">
                <TableLayout />
            </div>
            <div class="flex-auto basis-2/6">
                <TableLayout />
            </div>
            <div class="flex-auto basis-2/6">
                <TableLayout />
            </div>
            <div class="flex-auto basis-2/6">
                <TableLayout />
            </div>
        </main>

        <Footer />

    </AuthenticatedLayout>
</template>
