<script setup>
import { reactive, watch } from 'vue';
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

const toggleCell = reactive({
    date: false,
    name: false,
    state: false,
    quantity: false,
    price: false,
    total: false,
});

watch(toggleCell, () => {
    console.log(toggleCell);
});

const total = formatter.format(props.total);

const hideOtherCells = (event) => {
    console.log(event);
}

</script>

<template>
    <tr>
        <DateCell :date="date" @show="hideOtherCells"/>
        <NameCell :name="name" />
        <StateCell :state="state" />
        <QuantityCell :quantity="quantity" />
        <PriceCell :price="price" />
        <td class="p-0 border border-white border-b-gray-100">
            <div class="py-3 px-6">{{ total }}</div>
        </td>
    </tr>
</template>

