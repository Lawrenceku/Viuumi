/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'custom-gradient':
                    'linear-gradient(232.96deg, #0E0E10 27.06%, rgba(23, 23, 26, 0.23) 92.12%)',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'brand-blue': '#0061FE',
                'brand-gray': '#1c1c1c',
                'off-white': '#DADADA',
                'gray-text': '#383838',
                'light-gray': '#E6E6E6',
                'lighter-gray': '#E6E6E651',
                'gradient-gray': '#363636',
            },
        },
    },
    plugins: [],
};
