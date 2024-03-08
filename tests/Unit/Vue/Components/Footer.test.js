import { mount, config } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import Footer from '@/Components/Footer.vue';

const i18n = createI18n({
    legacy: false,
});
config.global.plugins = [i18n];

describe('Footer', () => {
    const tables = [
        {id: 1, name: 'foo', color: 'blue', isActive: true},
        {id: 2, name: 'bar', color: 'red', isActive: true},
        {id: 3, name: 'baz', color: 'green', isActive: true},
        {id: 4, name: 'qux', color: 'orange', isActive: true},
    ];

    test('Click on filter always emits toggleTable with table id', async () => {
        const wrapper = mount(Footer, {
            props: {tables},
        });

        const filtersComponent = wrapper.findAllComponents('[data-testid="filter-component"]');

        filtersComponent.forEach(async (filter) => {
            await filter.trigger('click');
            expect(wrapper.emitted()).toHaveProperty('toggleTable');
        });
    });
});
