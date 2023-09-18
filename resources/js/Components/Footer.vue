<script setup>
import CreateFilter from '@/Components/CreateFilter.vue';
import Filter from '@/Components/Filter.vue';
</script>

<template>
    <footer class="bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Filter container -->
                <div class="flex gap-4">
                    <Filter name="Tout"/>
                    <Filter name="Partie cellules"/>
                    <Filter name="Consommables"/>
                    <Filter name="Outils"/>
                    <Filter name="Pièces détachées"/>
                </div>
                <CreateFilter />
            </div>
        </div>
    </footer>
</template>
