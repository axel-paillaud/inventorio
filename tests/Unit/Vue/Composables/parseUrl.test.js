import checkDateTypeInUrl from '@/Composables/parseUrl';

describe('checkDateTypeInUrl', () => {

    test('/year/ in url always return year', () => {
        expect(checkDateTypeInUrl('http://mywebsite.com/year/2023')).toBe('year');
        expect(checkDateTypeInUrl('mywebsite.com/year/2023')).toBe('year');
        expect(checkDateTypeInUrl('/randomurl/year/foo/bar/baz/')).toBe('year');
        expect(checkDateTypeInUrl('https://website.com/long/url/year/hello/world')).toBe('year');
    });

    test('/month/ in url always return month', () => {
        expect(checkDateTypeInUrl('http://mywebsite.com/month/2023')).toBe('month');
        expect(checkDateTypeInUrl('mywebsite.com/month/2023')).toBe('month');
        expect(checkDateTypeInUrl('/randomurl/month/foo/bar/baz/')).toBe('month');
        expect(checkDateTypeInUrl('https://website.com/long/url/month/hello/world')).toBe('month');
    });

    test('/day/ in url always return day', () => {
        expect(checkDateTypeInUrl('http://mywebsite.com/day/2023')).toBe('day');
        expect(checkDateTypeInUrl('mywebsite.com/day/2023')).toBe('day');
        expect(checkDateTypeInUrl('/randomurl/day/foo/bar/baz/')).toBe('day');
        expect(checkDateTypeInUrl('https://website.com/long/url/day/hello/world')).toBe('day');
    });
});
