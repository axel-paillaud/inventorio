<script setup>
import { computed } from 'vue';

const props = defineProps({
    date: String,
    name: String,
    state: String,
    quantity: Number,
    price: Number,
});

// Maybe use computed here when we need to update date in real time
const formattedDate = new Date(props.date).toLocaleDateString();

const total = computed(() => {
    return (props.quantity * props.price).toFixed(2);
});
</script>

<template>
    <tr>
        <td class="td td-first">
            <input
                class="input-cell w-full focus:ring-0"
                type="date"
                :input="date"
            >
            <div class="fixed-cell">
                {{ formattedDate }}
            </div>
        </td>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                type="text"
                value="Lame de ressort"
            >
            <div class="fixed-cell">
                {{ name }}
            </div>
        </td>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                type="text"
                value="Occasion"
            >
            <div class="fixed-cell whitespace-nowrap">
                {{ state }}
            </div>
        </td>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                type="number"
                value="2"
            >
            <div class="fixed-cell">
                {{ quantity }}
            </div>
        </td>
        <td class="td">
            <input
                class="input-cell w-full focus:ring-0"
                type="number"
                value="150"
            >
            <div class="fixed-cell">
                {{ price }}
            </div>
        </td>
        <td class="td">
            <div class="fixed-cell">{{ total }}</div>
        </td>
    </tr>
</template>
