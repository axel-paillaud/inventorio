<script setup>
import { isPositiveInteger } from '@/Composables/validators/integer';
import CreateFilter from '@/Components/CreateFilter.vue';
import Filter from '@/Components/Filter.vue';

const props = defineProps({
    tables: Array,
});

const emit = defineEmits({
    toggleTable: ( id ) => {
        if (isPositiveInteger(id)) {
            return true
        } else {
            console.warn('Invalid table id type!');
            return false;
        }
    },
});

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
        z-70"
    >
        <div class="mx-auto px-4 sm:px-8 lg:px-12">
            <div class="flex justify-between items-center h-16">
                <!-- Filter container -->
                <div class="flex gap-4">
                    <Filter
                        name="Tout"
                        color="gray"
                    />
                    <Filter v-for="table in tables"
                        data-testid="filter-component"
                        :key="'filter' + table.id"
                        :name="table.name"
                        :color="table.color"
                        :isActive="Boolean(table.isActive)"
                        @click="$emit('toggleTable', table.id)"
                    />
                </div>
                <CreateFilter />
            </div>
        </div>
    </footer>
</template>
