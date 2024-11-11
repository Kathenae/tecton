import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
            },
            colors: {
                bahia: {
                    '50': '#f9fce9',
                    '100': '#f1f7d0',
                    '200': '#e3efa7',
                    '300': '#cee373',
                    '400': '#b6d345',
                    '500': '#99b929',
                    '600': '#77931d',
                    '700': '#5a711a',
                    '800': '#495a1a',
                    '900': '#3e4c1b',
                    '950': '#202a09',
                },
                tuatara : {
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6d6d6d',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#3f3f3f',
                    '950': '#262626',
                },
    
            }
        },
    },

    plugins: [forms],
};
