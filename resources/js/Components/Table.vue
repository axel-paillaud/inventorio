<script setup>
import { Plus } from 'lucide-vue-next';
import { formatter } from '@/Services/FormatService';
import colors from '@/Services/ColorService';

const props = defineProps({
    name: String,
    color: {type: String, default: 'gray'},
    total: Number,
});

const total = formatter.format(props.total);

</script>

<template>
    <div class="overflow-auto w-full">
        <p
            class="px-6 py-1"
            :class="colors[color].title"
        >
            {{ name }}
        </p>
        <div class="max-h-[60vh] border overflow-auto shadow-md rounded-lg relative">
            <table
                class="bg-white shadow-md sm:rounded-lg w-full
                border border-separate border-spacing-0"
            >
                <thead
                    class="text-left sticky top-0 whitespace-nowrap z-50"
                    :class="colors[color].bg"
                >
                    <tr>
                        <th class="py-3 px-6 border-b">Date</th>
                        <th class="py-3 px-6 border-b">Nom</th>
                        <th class="py-3 px-6 border-b">État</th>
                        <th class="py-3 px-6 border-b">Quantité</th>
                        <th class="py-3 px-6 border-b">Prix Unitaire</th>
                        <th class="py-3 px-6 border-b">Total</th>
                    </tr>
                </thead>
                <tfoot class="sticky bottom-0 bg-white">
                    <tr>
                        <td class="td-last-row">
                            <div
                                class="rounded-full hover:bg-gray-100 p-1.5 w-fit
                                cursor-pointer horizontal-center"
                            >
                                <Plus size="20"/>
                            </div>
                        </td>
                        <td class="td-last-row" colspan="4">Total</td>
                        <td class="td-last-row whitespace-nowrap" colspan="1">
                            {{ total }}
                        </td>
                    </tr>
                </tfoot>
                <tbody>
                    <slot />
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

.td-last-row {
    padding: 12px 24px;
    border-top: solid 1px var(--gray-200);
}
</style>
