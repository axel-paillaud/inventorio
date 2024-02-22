import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/js/Services/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                //sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                sans: ['lato', ...defaultTheme.fontFamily.sans],
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100'
            },
            animation: {
                'zoom-in': 'zoom-in 0.2s ease-out',
            },
            keyframes: {
                'zoom-in': {
                    'from': { transform: 'scale(0.9)', opacity: 0.5 },
                    'to': { transform: 'scale(1)', opacity: 1 },
                },
            },
        },
    },

    plugins: [forms],
};
