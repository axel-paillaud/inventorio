import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTableStore = defineStore('tables', () => {
    const name = ref('axel');
    const tables = ref(null);

    return { name, tables };
});
