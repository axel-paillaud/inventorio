<script setup>
import { ref } from 'vue';
import { isPositiveInteger } from '@/validators/integer';
import { ListFilter, X } from 'lucide-vue-next';
import CreateNewTable from '@/Components/CreateNewTable.vue';
import FilterAll from '@/Components/FilterAll.vue';
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
    toggleAllTable: () => true,
});

const showingTableFilter = ref(false);

</script>

<template>
    <!-- Gradient effect -->
    <div
        class="fixed bottom-0 h-28 w-full bg-gradient-to-t from-gray-300 z-10
        pointer-events-none"
    >
    </div>
    <footer
        class="bg-white border-t border-gray-100 sticky bottom-0 left-0 right-0
        z-70"
    >
        <!-- Responsive filter list -->
        <div
            v-show="showingTableFilter"
            class="px-4 py-3 flex flex-col gap-4"
        >
            <Filter v-for="table in tables"
                data-testid="filter-component"
                :key="'responsiveFilter' + table.id"
                :tableId="table.id"
                :name="table.name"
                :responsive="true"
                :color="table.color"
                :isActive="Boolean(table.isActive)"
                @click="$emit('toggleTable', table.id)"
            />
        </div>

        <div class="mx-auto px-4 sm:px-8 lg:px-12">
            <div class="flex justify-between items-center h-16">

                <!-- Filter container -->
                <div class="hidden sm:flex gap-4">
                    <FilterAll
                        :tables="tables"
                        color="gray"
                        @click="$emit('toggleAllTable')"
                    />
                    <Filter v-for="table in tables"
                        data-testid="filter-component"
                        :key="'filter' + table.id"
                        :tableId="table.id"
                        :name="table.name"
                        :color="table.color"
                        :isActive="Boolean(table.isActive)"
                        @click="$emit('toggleTable', table.id)"
                    />
                </div>

                <!-- Responsive filter container -->
                <div class="flex sm:hidden">
                    <button class="border border-gray-200 hover:bg-gray-100 transition-colors
                        px-3 py-2 rounded capitalize flex items-center gap-1.5"
                        :class="showingTableFilter ? 'bg-gray-100' : ''"
                        @click="showingTableFilter = !showingTableFilter"
                    >
                        <ListFilter v-show="!showingTableFilter" size="16" />
                        <X v-show="showingTableFilter" size="24" />
                        <span v-show="!showingTableFilter">Tables</span>
                    </button>
                </div>
                <CreateNewTable />
            </div>
        </div>
    </footer>
</template>
