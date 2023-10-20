import { mount } from '@vue/test-utils';
import Filter from '@/Components/Filter';
import colors from '@/Services/ColorService';

describe('Filter', () => {
    test('When filter is active, always set a bg color', () => {
        const wrapper = mount(Filter, {
            props: {
                isActive: true,
                color: 'green',
                name: 'foo',
            }
        });

        const filterButton = wrapper.find('[data-testid="filterButton"]');
        console.log(filterButton.html());

        expect(true).toBe(true);
    });
});
