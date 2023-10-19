import { createPairs } from '@/Composables/sort';

describe('SortTable', () => {

    const randomArray = [1, 4, 7, 8, 3, 8, 10, 11, 0, 23, 54, 38, 38, 2, 34];

    test('A table pairs is never more than 2 tables', () => {

        const pairs = createPairs(randomArray);
        pairs.forEach((pair) => {
            expect(pair.length).toBeLessThan(3);
        });
    });
});
