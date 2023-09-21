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
            class="pt-12 pb-32 mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-2
            gap-10"
        >
            <div>
                <TableLayout />
            </div>
            <div>
                <TableLayout />
            </div>
            <div>
                <TableLayout />
            </div>
            <div>
                <TableLayout />
            </div>
        </main>

        <Footer />

    </AuthenticatedLayout>
</template>
