<script setup>
import CreateFilter from '@/Components/CreateFilter.vue';
import Filter from '@/Components/Filter.vue';
import { useTableStore } from '@/Stores/table';
import colors from '@/Services/ColorService';

//const colors = {
//    green: 'border-green-200 hover:bg-green-100',
//    blue: 'border-blue-200 hover:bg-blue-100',
//    red: 'border-red-200 hover:bg-red-100',
//    orange: 'border-orange-200 hover:bg-orange-100',
//};

const store = useTableStore();
const tables = store.tables;

</script>

<template>
    <!-- Gradient effect -->
    <div
        class="fixed bottom-0 h-28 w-full bg-gradient-to-t from-gray-300 z-10
        pointer-events-none"
    >
    </div>
    <footer
        class="bg-white border-t border-gray-100 fixed bottom-0 left-0 right-0
        z-20"
    >
        <div class="mx-auto px-4 sm:px-8 lg:px-12">
            <div class="flex justify-between items-center h-16">
                <!-- Filter container -->
                <div class="flex gap-4">
                    <Filter
                        name="Tout"
                        :class="colors['gray'].filter"
                    />
                    <Filter v-for="table in tables"
                        :key="table.id"
                        :name="table.name"
                        :class="colors[table.color].filter"
                    />
                </div>
                <CreateFilter />
            </div>
        </div>
    </footer>
</template>
