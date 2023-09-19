<script setup>
</script>

<template>
    <table
        class="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full"
    >
        <caption class="text-left">Pièces détachées</caption>
        <thead class="text-left bg-lime-100">
            <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>État</th>
                <th>Quantité</th>
                <th>Prix Unitaire</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="n in 20">
                <td>10/08/2023</td>
                <td>Lame de ressort</td>
                <td>Occasion</td>
                <td>2</td>
                <td>150</td>
                <td>300</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
th, td {
    padding: 12px 24px;

}
</style>
