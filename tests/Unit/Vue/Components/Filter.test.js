import { mount } from '@vue/test-utils';
import Filter from '@/Components/Filter.vue';
import colors from '@/Services/ColorService';

describe('Filter', () => {
    test('When filter is active, always set a bg color', async () => {
        const props = {
            isActive: true,
            color: 'green',
            name: 'foo',

        }
        const wrapper = mount(Filter, {
            props: props
        });

        let filterButton = wrapper.find('[data-testid="filter-button"]');
        expect(filterButton.classes()).toContain(colors[props.color].bg);

        props.color = 'blue';
        await wrapper.setProps(props);
        filterButton = wrapper.find('[data-testid="filter-button"]');
        expect(filterButton.classes()).toContain(colors[props.color].bg);
    });

    test('When filter is not active, bg color is not set', async () => {
        const props = {
            isActive: false,
            color: 'green',
            name: 'foo',

        }
        const wrapper = mount(Filter, {
            props: props
        });

        let filterButton = wrapper.find('[data-testid="filter-button"]');
        expect(filterButton.classes(colors[props.color].bg)).toBe(false);

        props.color = 'blue';
        await wrapper.setProps(props);
        filterButton = wrapper.find('[data-testid="filter-button"]');
        expect(filterButton.classes(colors[props.color].bg)).toBe(false);
    });
});
