import { ref, onMounted } from 'vue';

export default function useCloseModalWithBackdrop(modalRef) {
    const modal = ref(null);

    onMounted(() => {
        modal.value = modalRef.value;
    });

    const closeModalWithBackdrop = (e) => {
        const modalDimensions = modalRef.value.getBoundingClientRect();
        if (
            e.clientX < modalDimensions.left ||
                e.clientX > modalDimensions.right ||
                e.clientY < modalDimensions.top ||
                e.clientY > modalDimensions.bottom
        ) {
            modal.value.close();
        }
    }

    return { closeModalWithBackdrop };
}
