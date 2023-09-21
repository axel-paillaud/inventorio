<script setup>
import CreateFilter from '@/Components/CreateFilter.vue';
import Filter from '@/Components/Filter.vue';

const colors = {
    green: 'border-lime-200 hover:bg-lime-100',
    blue: 'border-blue-200 hover:bg-blue-100',
    red: 'border-red-200 hover:bg-red-100',
    orange: 'border-orange-200 hover:bg-orange-100',
};
</script>

<template>
    <!-- Gradient effect -->
    <div
        class="fixed bottom-0 h-28 w-full bg-gradient-to-t from-gray-300"
    >
    </div>
    <footer
        class="bg-white border-t border-gray-100 fixed bottom-0 left-0 right-0"
    >
        <div class="mx-auto px-4 sm:px-8 lg:px-12">
            <div class="flex justify-between items-center h-16">
                <!-- Filter container -->
                <div class="flex gap-4">
                    <Filter name="Tout" />
                    <Filter
                        name="Partie cellules"
                        color="green"
                        :class="colors.green"
                    />
                    <Filter
                        name="Consommables"
                        color="blue"
                        :class="colors.blue"
                    />
                    <Filter
                        name="Outils"
                        color="red"
                        :class="colors.red"
                    />
                    <Filter
                        name="Pièces détachées"
                        color="orange"
                        :class="colors.orange"
                    />
                </div>
                <CreateFilter />
            </div>
        </div>
    </footer>
</template>
