<script setup>
import { ref } from 'vue';
import { isNumber } from '@/Composables/validators/integer';
import DeleteCell from '@/Components/Cells/Delete.vue';
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

const isRowHover = ref(false);

const emit = defineEmits({
    updateTotal: (total) => {
        if (isNumber(total)) return true;
        else {
            console.warn('Invalid total row type!');
            return false;
        }
    },
    deleteRowEvent: null,
    error: null,
});

const quantity = ref(props.quantity);
const price = ref(props.price);

</script>

<template>
    <tr @mouseenter="isRowHover = true" @mouseleave="isRowHover = false">
        <DeleteCell
            :rowId="rowId"
            :isRowHover=isRowHover
            @delete-row-event="(deleteRowId) => $emit('deleteRowEvent', deleteRowId)"
            @error-delete-row-event="(errorData) => $emit('error', errorData)"
        >
        </DeleteCell>
        <DateCell :date="date" :rowId="rowId" />
        <NameCell
            :name="name"
            :rowId="rowId"
            @error-name="(errorData) => $emit('error', errorData)"
        />
        <StateCell
            :state="state"
            :rowId="rowId"
            @error-state="(errorData) => $emit('error', errorData)"
        />
        <QuantityCell
            :quantity="quantity"
            :rowId="rowId"
            @updateQuantity="(updatedQuantity) => quantity = updatedQuantity"
            @error-quantity="(errorData) => $emit('error', errorData)"
        />
        <PriceCell
            :price="price"
            :rowId="rowId"
            @updatePrice="(updatedPrice) => price = updatedPrice"
            @error-price="(errorData) => $emit('error', errorData)"
        />
        <Total
            :quantity="quantity"
            :price="price"
            @updateTotal="(updatedTotal) => $emit('updateTotal', updatedTotal)"
        />
    </tr>
</template>

