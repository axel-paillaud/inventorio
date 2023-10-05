import { watch } from 'vue';

/**
 * Set isActive all others cells than the current one to false.
 * @param {object} currentCell - Current cell based on Pinia store and current cell id.
 * @param {object} store - Pinia store.
 * @param {string} currentCellId - Current cell Id of the component.
 */
export default function hideOtherCells(currentCell, store, currentCellId) {
    watch(() => currentCell.isActive, (newValue) => {
        if (newValue) {
            for (const cell in store.cells) {
                if (cell !== currentCellId) {
                    store.cells[cell].isActive = false;
                }
            }
        }
    });
}

