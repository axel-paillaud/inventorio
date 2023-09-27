import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTableStore = defineStore('tables', () => {
    const tables = ref(null);
    const rows = ref(null);

    return { tables, rows };
});
