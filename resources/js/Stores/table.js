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

    function associateRowToTable() {
        tables.value.forEach((table) => {
            table.rows = [];
            rows.value.forEach((row) => {
                if (table.id === row.table_id) {
                    table.rows.push(row);
                }
            });
        });
    }

    function computeTotalTable() {
        tables.value.forEach((table) => {
            let total = 0;
            table.rows.forEach((row) => {
                total += row.total;
            });
            table.total = total;
        });
    }

    return {
        tables, rows, computeTotalRow, associateRowToTable, computeTotalTable
    };
});
