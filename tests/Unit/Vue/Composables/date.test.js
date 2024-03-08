import { isDateValid } from '@/validators/date';

describe('isDateValid', () => {

    test('Valid string date format MM/DD/YYYY or YYYY/MM/DD return true', () => {
        expect(isDateValid('10-31-1999')).toBe(true);
        expect(isDateValid('01-12-2030')).toBe(true);
        expect(isDateValid('10-31-1657')).toBe(true);
        expect(isDateValid('2023-10-31')).toBe(true);
    });

    test('Not valid string date format return false', () => {
        expect(isDateValid('foo')).toBe(false);
        expect(isDateValid('31-12-1995')).toBe(false);
        expect(isDateValid(4)).toBe(false);
    });
});
