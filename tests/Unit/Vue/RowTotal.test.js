import { mount } from '@vue/test-utils';
import Total from '@/Components/Cells/RowTotal.vue';
describe('RowTotal', () => {

    test('formattedTotal is always equal to price * quantity', async () => {
        const wrapper = mount(Total, {
            props: {
                quantity: 5,
                price: 10
            }
        });

        expect(wrapper.find('[data-testid="row-total"]').text()).toBe('50,00');

        await wrapper.setProps({ quantity: 10, price: 7 });
        expect(wrapper.find('[data-testid="row-total"]').text()).toBe('70,00');

        await wrapper.setProps({ quantity: 3, price: 28.98 });
        expect(wrapper.find('[data-testid="row-total"]').text()).toBe('86,94');

        await wrapper.setProps({ quantity: 28, price: 13.49 });
        expect(wrapper.find('[data-testid="row-total"]').text()).toBe('377,72');
    });

    test('When props price and quantity is updated, emit the new total', async () => {
        const wrapper = mount(Total);

        await wrapper.setProps({ quantity: 10, price: 7 });
        expect(wrapper.emitted()).toHaveProperty('updateTotal');
        expect(wrapper.emitted().updateTotal[0]).toEqual([70]);

        await wrapper.setProps({ quantity: 84, price: 13.56 });
        expect(wrapper.emitted()).toHaveProperty('updateTotal');
        expect(wrapper.emitted().updateTotal[1]).toEqual([1139.04]);
    });
});
