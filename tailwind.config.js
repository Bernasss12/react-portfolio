/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#222845',
                secondary: '#d5363e',
                tertiary: '#e2ca48',
            },
            fontFamily: {
                'source-sans-3': ['Source Sans 3', 'sans-serif']
            }
        },
    },
    plugins: [],
}

