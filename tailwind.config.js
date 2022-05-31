const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            zIndex: {
                '-1': '-1'
            },
            colors: {
                violet: colors.violet
            }
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms', require('@tailwindcss/aspect-ratio'))],
}