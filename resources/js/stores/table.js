import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTableStore = defineStore('tables', () => {
    const name = ref('axel');
    const table = ref(null);

    return { name, table };
});
