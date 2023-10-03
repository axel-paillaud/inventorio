<script setup>
import { formatter } from '@/Services/FormatService.js';
import DateCell from '@/Components/Cells/Date.vue';
import NameCell from '@/Components/Cells/Name.vue';
import StateCell from '@/Components/Cells/State.vue';
import QuantityCell from '@/Components/Cells/Quantity.vue';
import PriceCell from '@/Components/Cells/Price.vue';

const props = defineProps({
    date: String,
    name: String,
    state: String,
    quantity: Number,
    price: Number,
    total: Number,
});

const total = formatter.format(props.total);

</script>

<template>
    <tr>
        <DateCell :date="date" />
        <NameCell :name="name" />
        <StateCell :state="state" />
        <QuantityCell :quantity="quantity" />
        <PriceCell :price="price" />
        <td class="td-total">
            <div class="fixed-cell">{{ total }}</div>
        </td>
    </tr>
</template>

<style scoped>
.td {
    padding: 0;
    border: 1px solid white;
    border-bottom: 1px solid var(--gray-100);
    transition: background-color 0.2s ease;
    cursor: text;
}

.td:hover {
    border-top: 1px solid var(--gray-100);
    border-left: 1px solid var(--gray-200);
    border-right: 1px solid var(--gray-200);
    background-color: var(--gray-100);
}

.td-total {
    padding: 0;
    border: 1px solid white;
    border-bottom: 1px solid var(--gray-100);
}

.input-cell {
    padding: 12px 24px;
    transition: all 0.2s ease;
    transition: background-color 0.2s ease;
}

.input-cell:focus {
    border-left-color: var(--gray-200);
    border-right-color: var(--gray-200);
    border-top-color: var(--gray-100);
    background-color: var(--gray-100);
}

.input-cell:hover {
    border-left-color: var(--gray-200);
    border-right-color: var(--gray-200);
    border-top-color: var(--gray-100);
    background-color: var(--gray-100);
}

.fixed-cell {
    padding: 12px 24px;
    max-height: 145px;
    overflow: hidden;
}
</style>
