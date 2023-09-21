<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TableLayout from '@/Layouts/TableLayout.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <main class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <TableLayout />
            </div>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <TableLayout />
            </div>
        </main>

        <Footer />

    </AuthenticatedLayout>
</template>
