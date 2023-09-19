<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Footer from '@/Components/Footer.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <main class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </main>

        <Footer />

    </AuthenticatedLayout>
</template>
