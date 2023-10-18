import { mount } from '@vue/test-utils';
import Total from '@/Components/Cells/TableTotal.vue';

describe('TableTotal', () => {

    test('Table total is equal to the sum of all Row Total', async () => {
        let rows = [
            {total: 10},
            {total: 20},
            {total: 10},
        ];

        const  wrapper = mount(Total, {
            props : {
                rows: rows,
            }
        });

        expect(wrapper.find('[data-testid="table-total"]').text()).toBe('40,00');

        rows = [
            {total: 23.98},
            {total: 12.90},
            {total: 89.1},
        ];

        await wrapper.setProps({rows: rows});
        expect(wrapper.find('[data-testid="table-total"]').text()).toBe('125,98');
    });
});
