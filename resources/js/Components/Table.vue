<script setup>
import { ref, nextTick, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { buildDefaultDate } from '@/Services/buildDefaultDate';
import Row from '@/Components/Row.vue';
import Total from '@/Components/Cells/TableTotal.vue';
import CreateNewRow from '@/Components/CreateNewRow.vue';
import DeleteTable from '@/Components/Cells/DeleteTable.vue';
import colors from '@/Services/ColorService';

const props = defineProps({
    rows: Array,
    year: Number,
    month: Number,
    day: Number,
    tableId: Number,
    name: String,
    color: {type: String, default: 'gray'},
});

const { t } = useI18n();

const error = ref(null);

// Remove visible form error after x seconds
watch(error, (newError) => {
    if (newError) setTimeout(() => error.value = null, 5000);
});

const currentFilterDate = buildDefaultDate(props.year, props.month, props.day);

const rows = ref(props.rows);

const tableContainer = ref(null);

const addNewRowAndScrollDown = async (newRow) => {
    rows.value.push(newRow);
    await nextTick();
    tableContainer.value.scrollTop = tableContainer.value.scrollHeight;
}

const deleteRow = (rowId) => {
    rows.value.splice(rows.value.findIndex((row) => row.id === rowId), 1);
}

</script>

<template>
    <div class="w-full lg:basis-4/12 grow">
        <p
            class="py-4 px-16"
            :class="colors[color].title"
        >
            {{ name }}
        </p>
        <div
            ref="tableContainer"
            class="max-h-[65vh] border overflow-auto shadow-md rounded-lg relative"
            scroll-region
        >
            <table
                class="bg-white w-full border border-separate border-spacing-0"
            >
                <thead
                    class="text-left sticky top-0 whitespace-nowrap z-30
                    pointer-events-none"
                    :class="colors[color].bg"
                >
                    <tr>
                        <th></th>
                        <th class="py-3 px-6 border-b capitalize">{{ t('table.columnName.date') }}</th>
                        <th class="py-3 px-6 border-b capitalize">{{ t('table.columnName.name') }}</th>
                        <th class="py-3 px-6 border-b capitalize">{{ t('table.columnName.state') }}</th>
                        <th class="py-3 px-6 border-b capitalize">{{ t('table.columnName.quantity') }}</th>
                        <th class="py-3 px-6 border-b capitalize">{{ t('table.columnName.price') }}</th>
                        <th class="py-3 px-6 border-b">Total</th>
                    </tr>
                </thead>
                <tfoot class="sticky bottom-0 bg-white z-30">
                    <Transition>
                        <tr v-if="error">
                            <td class="border-t border-t-gray-200"></td>
                            <td class="text-red-500 py-3 px-6 border-t border-t-gray-200" colspan="6">
                                {{ error }}
                            </td>
                        </tr>
                    </Transition>
                    <tr>
                        <td class="border-t border-t-gray-200"></td>
                        <CreateNewRow
                            @create-new-row-event="addNewRowAndScrollDown"
                            @error-create-new-row-event="(errorData) => error = errorData"
                            :currentFilterDate="currentFilterDate"
                            :tableId="tableId"
                        />
                        <td class="td-last-row" colspan="4">Total</td>
                        <Total v-if="rows" :rows="rows"/>
                    </tr>
                </tfoot>
                <tbody>
                    <Row
                        v-if="rows"
                        v-for="row in rows"
                        :key="row.id" :rowId="row.id"
                        :date="row.date"
                        :name="row.name"
                        :state="row.state"
                        :quantity="row.quantity"
                        :price="row.price"
                        @update-total="(updatedTotal) => row.total = updatedTotal"
                        @delete-row-event="deleteRow"
                        @error="(errorData) => error = errorData"
                    />
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

</style>
