import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTableStore = defineStore('tables', () => {
    const tables = ref({});
    const rows = ref({});

    function computeTotalRow() {
        rows.value.forEach((row) => {
            const total = computed(() => {
                return (row.quantity * row.price);
            });

            row.total = total.value;
        });
    }

    return { tables, rows, computeTotalRow };
});
