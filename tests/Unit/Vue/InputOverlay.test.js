import { mount } from '@vue/test-utils';
import InputOverlay from '@/Components/InputOverlay.vue';
import DateCell from '@/Components/Cells/Date.vue';

afterEach(() => {
  // clean up
  document.body.innerHTML = ''
})

describe('InputOverlay', () => {
    test('InputOverlay emit closeCell when we click on it', async () => {
        const wrapper = mount(InputOverlay, {
            props: {
                isActive: true
            }
        });

        // Overlay is 'Teleport' to the body, so we can not use wrapper here
        document.querySelector('[data-testid="overlay"]').click();

        expect(wrapper.emitted()).toHaveProperty('closeCell');
    });

    test('InputOverlay emit closeCell when we press enter', async () => {
        const wrapper = mount(InputOverlay, {
            props: {
                isActive: true
            },
            emits: ['closeCell'],
        });

        const event = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,

        });

        document.dispatchEvent(event);

        expect(wrapper.emitted()).toHaveProperty('closeCell');
    });

    test('InputOverlay emit closeCell when we press escape', async () => {
        const wrapper = mount(InputOverlay, {
            props: {
                isActive: true
            },
            emits: ['closeCell'],
        });

        const event = new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            which: 27,

        });

        document.dispatchEvent(event);

        expect(wrapper.emitted()).toHaveProperty('closeCell');
    });

    test('Overlay exist when isActive prop is true', async () => {
        // We only use props on this wrapper
        const wrapper = mount(InputOverlay, {
            props: {
                isActive: true
            }
        });

        expect(document.querySelector('[data-testid="overlay"]')).not.toBeNull();
    });
});

