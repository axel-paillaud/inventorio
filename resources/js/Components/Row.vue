<script setup>
import { reactive, ref } from 'vue';
import { formatter } from '@/Services/FormatService.js';

const props = defineProps({
    date: String,
    name: String,
    state: String,
    quantity: Number,
    price: Number,
    total: Number,
});

const currentState = ref(props.state);

// Maybe use computed here when we need to update date in real time
const formattedDate = new Date(props.date).toLocaleDateString();

// Also here, maybe use computed
const formattedPrice = formatter.format(props.price);
const total = formatter.format(props.total);

const showCell = reactive({
    date: false,
    name: false,
    state: false,
    quantity: false,
    price: false
});

</script>

<template>
    <tr>
        <td
            class="td relative"
            @click="showCell.date = true"
        >
            <input
                class="input-cell focus:ring-0 absolute inset-0 w-48 z-30"
                :class="{ hidden: !showCell.date}"
                type="date"
                :value="date"
            >
            <div class="fixed-cell" :class="{ invisible: showCell.date }">
                {{ formattedDate }}
            </div>
        </td>
        <td
            class="td relative"
            @click="showCell.name = true">
            <span
                class="input-cell absolute inset-0 w-full z-30 bg-white h-fit min-h-full"
                :class="{ hidden: !showCell.name }"
                role="textbox"
                contenteditable="true"
            >
                {{ name }}
            </span>
            <div class="fixed-cell" :class="{ invisible: showCell.name }">
                {{ name }}
            </div>
        </td>
        <td class="td relative" @click="showCell.state = true">
            <select
                class="input-cell w-full focus:ring-0 absolute inset-0 z-30 w-32"
                :class="{ hidden: !showCell.state }"
                v-model="currentState"
            >
                <option value="Neuf">Neuf</option>
                <option value="Occasion">Occasion</option>
                <option value="A réparer">A réparer</option>
            </select>
            <div class="fixed-cell whitespace-nowrap" :class="{ hidden: showCell.state }">
                {{ state }}
            </div>
        </td>
        <td class="td relative" @click="showCell.quantity = true">
            <input
                class="input-cell w-full h-full focus:ring-0 absolute inset-0 z-30"
                :class="{ hidden: !showCell.quantity }"
                type="number"
                :value="quantity"
            >
            <div class="fixed-cell" :class="{ hidden: showCell.quantity }">
                {{ quantity }}
            </div>
        </td>
        <td class="td relative" @click="showCell.price = true">
            <input
                class="input-cell w-full h-full focus:ring-0 absolute inset-0 z-30"
                :class="{ hidden: !showCell.price }"
                type="number"
                :value="price"
            >
            <div class="fixed-cell" :class="{ hidden: showCell.price }">
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
