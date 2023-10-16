import { onMounted, onUnmounted } from 'vue';

export function emitCloseOnEscape(emit, isActive) {
   const closeOnEscape = (e) => {
        if (e.key === "Escape") {
            console.log(isActive);
            emit('closeCell');
        }
    }

    onMounted(() => document.addEventListener('keydown', closeOnEscape));
    onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

}

export function emitCloseOnEnter(emit, isActive) {
   const closeOnEscape = (e) => {
        if (isActive && e.key === "Enter") {
            emit('closeCell');
        }
    }

    onMounted(() => document.addEventListener('keydown', closeOnEscape));
    onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));
}
