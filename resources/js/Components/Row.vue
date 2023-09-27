<script setup>
defineProps({
    date: String,
    name: String,
    state: String,
    quantity: Number,
    price: Number,
});
</script>

<template>
    <tr>
        <td class="td td-first">
            <input
                class="input-cell w-full focus:ring-0"
                type="date"
                value="2018-07-22"
            >
            <div class="fixed-cell">
                {{ date }}
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
            <div class="fixed-cell">300</div>
        </td>
    </tr>
</template>
