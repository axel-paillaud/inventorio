<script setup>
import { computed, ref, reactive } from 'vue';
import { formatter } from '@/Services/FormatService.js';

const props = defineProps({
    date: String,
    name: String,
    state: String,
    quantity: Number,
    price: Number,
    total: Number,
});

// Maybe use computed here when we need to update date in real time
const formattedDate = new Date(props.date).toLocaleDateString();

// Also here, maybe use computed
const formattedPrice = formatter.format(props.price);
const total = formatter.format(props.total);

const showCellValue = ref(true);
const showInput = ref(false);

function toggleInput(event) {
    console.log(event);
    showCellValue.value = !showCellValue.value;
    showInput.value = !showInput.value;
}

</script>

<template>
    <tr>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                :class="{ hidden: !showInput}"
                @click="toggleInput"
                type="date"
                :value="date"
            >
            <div class="fixed-cell" @click="toggleInput" :class="{ hidden: !showCellValue }">
                {{ formattedDate }}
            </div>
        </td>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                :class="{ hidden: !showInput }"
                type="text"
                :value="name"
            >
            <div class="fixed-cell">
                {{ name }}
            </div>
        </td>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                :class="{ hidden: !showInput }"
                type="text"
                :value="state"
            >
            <div class="fixed-cell whitespace-nowrap">
                {{ state }}
            </div>
        </td>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                :class="{ hidden: !showInput }"
                type="number"
                :value="quantity"
            >
            <div class="fixed-cell">
                {{ quantity }}
            </div>
        </td>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                :class="{ hidden: !showInput }"
                type="number"
                :value="price"
            >
            <div class="fixed-cell">
                {{ formattedPrice }}
            </div>
        </td>
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
    border: 1px solid white;
    border-bottom-color: var(--gray-200);
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
