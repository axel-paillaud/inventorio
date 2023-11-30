export default function checkDateTypeInUrl(url) {
    if (/\/year\//.test(url)) return 'year';
    else if (/\/month\//.test(url)) return 'month';
    else if (/\/day\//.test(url)) return 'day';
    return 'always';
}
