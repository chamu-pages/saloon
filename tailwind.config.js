/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                'gold': '#D4AF37',
            }
        },
    },
    plugins: [],
}
