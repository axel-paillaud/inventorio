import { onMounted, onUnmounted } from 'vue';

export function emitCloseOnEscape(emit, isActive) {
   const closeOnEscape = (e) => {
        if (isActive && e.key === "Escape") {
            emit('closeCell');
        }
    }

    onMounted(() => document.addEventListener('keydown', closeOnEscape));
    onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

    // did I have to return something here ?
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
