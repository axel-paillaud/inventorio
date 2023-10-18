import { isPositiveInteger } from '@/Composables/validators/integer';
import { isNumber } from '@/Composables/validators/integer';

describe('isPositiveInteger', () => {
    test('Return true when input is positive integer', () => {
        expect(isPositiveInteger(3)).toBe(true);
        expect(isPositiveInteger(123)).toBe(true);
        expect(isPositiveInteger(458)).toBe(true);
    });

    test('Return false when input is not positive integer', () => {
        expect(isPositiveInteger('foo')).toBe(false);
        expect(isPositiveInteger('')).toBe(false);
        expect(isPositiveInteger(0)).toBe(false);
        expect(isPositiveInteger(-2)).toBe(false);
        expect(isPositiveInteger(-3.8)).toBe(false);
        expect(isPositiveInteger(8.3)).toBe(false);
        expect(isPositiveInteger([])).toBe(false);
    });
});

describe('isNumber', () => {
    test('Return true when input is a valid JavaScript number', () => {
        expect(isNumber(1)).toBe(true);
        expect(isNumber(-2)).toBe(true);
        expect(isNumber(2.38)).toBe(true);
        expect(isNumber(-2.38)).toBe(true);
    });

    test('Return false when input is not a valid JavaScript number', () => {
        expect(isNumber('bar')).toBe(false);
        expect(isNumber('0')).toBe(false);
        expect(isNumber('')).toBe(false);
        expect(isNumber([])).toBe(false);
        expect(isNumber('123')).toBe(false);
    });
});
