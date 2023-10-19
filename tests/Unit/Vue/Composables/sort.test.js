import { createPairs, createActivePairs } from '@/Composables/sort';

describe('createPairs', () => {

    const randomArray = [1, 4, 7, 8, 3, 8, 10, 11, 0, 23, 54, 38, 38, 2, 34];

    test('A table pairs is never more than 2 tables', () => {

        const pairs = createPairs(randomArray);
        pairs.forEach((pair) => {
            expect(pair.length).toBeLessThan(3);
        });
    });

    test('', () => {

    });
});

describe('createActivePairs', () => {

    const randomArray = [
        {data: 1, isActive: true},
        {data: 3, isActive: true},
        {data: 8, isActive: false},
        {data: 18, isActive: false},
        {data: 18, isActive: true},
        {data: 20, isActive: true},
        {data: 0, isActive: false},
        {data: 4, isActive: true},
        {data: 4, isActive: false},
    ];

    test('An active pairs never contain disable element', () => {
        const activePairs = createActivePairs(randomArray);

        activePairs.forEach((pair) => {
            pair.forEach((element) => {
                expect(element.isActive).toBe(true);
            });
        });
    });

});
