<script setup>
import { ref } from 'vue';
import DateCell from '@/Components/Cells/Date.vue';
import NameCell from '@/Components/Cells/Name.vue';
import StateCell from '@/Components/Cells/State.vue';
import QuantityCell from '@/Components/Cells/Quantity.vue';
import PriceCell from '@/Components/Cells/Price.vue';
import Total from '@/Components/Cells/RowTotal.vue';

const props = defineProps({
    rowId: Number,
    date: String,
    name: String,
    state: String,
    quantity: Number,
    price: Number,
});

const quantity = ref(props.quantity);
const price = ref(props.price);

</script>

<template>
    <tr>
        <DateCell :date="date" :rowId="rowId" />
        <NameCell :name="name" />
        <StateCell :state="state" :rowId="rowId" />
        <QuantityCell
            :quantity="quantity"
            @updateQuantity="(updatedQuantity) => quantity = updatedQuantity"
        />
        <PriceCell
            :price="price"
            @updatePrice="(updatedPrice) => price = updatedPrice"
        />
        <Total
            :quantity="quantity"
            :price="price"
            @updateTotal="(updatedTotal) => $emit('updateTotal', updatedTotal)"
        />
    </tr>
</template>

