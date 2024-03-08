import { watch, nextTick } from 'vue';

export default function useFocus(isActive, element) {
    watch(isActive, async (newValue) => {
        if (newValue) {
            await nextTick();
            element.value.focus();
        }
    });
}
