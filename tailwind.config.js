import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
    	extend: {
    		fontFamily: {
    			sans: ['Figtree', ...defaultTheme.fontFamily.sans]
    		},
    		container: {
    			center: 'true'
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
    				'950': '#202a09'
    			},
    			tuatara: {
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
    				'950': '#262626'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },

    plugins: [forms, require("tailwindcss-animate")],
};
