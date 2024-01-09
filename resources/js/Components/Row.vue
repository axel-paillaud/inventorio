<script setup>
import { ref } from 'vue';
import { isNumber } from '@/Composables/validators/integer';
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

const emit = defineEmits({
    updateTotal: (total) => {
        if (isNumber(total)) return true;
        else {
            console.warn('Invalid total row type!');
            return false;
        }
    }
});

const quantity = ref(props.quantity);
const price = ref(props.price);

</script>

<template>
    <tr>
        <DateCell :date="date" :rowId="rowId" />
        <NameCell :name="name" :rowId="rowId" />
        <StateCell :state="state" :rowId="rowId" />
        <QuantityCell
            :quantity="quantity"
            :rowId="rowId"
            @updateQuantity="(updatedQuantity) => quantity = updatedQuantity"
        />
        <PriceCell
            :price="price"
            :rowId="rowId"
            @updatePrice="(updatedPrice) => price = updatedPrice"
        />
        <Total
            :quantity="quantity"
            :price="price"
            @updateTotal="(updatedTotal) => $emit('updateTotal', updatedTotal)"
        />
    </tr>
</template>

