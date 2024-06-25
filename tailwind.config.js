module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'outline': ['"Arial"', 'sans-serif']
            },
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.text-outline': {
                    '-webkit-text-stroke': '0.5px gray',
                    'color': 'transparent'
                },
                '.text-outline-2': {
                    '-webkit-text-stroke': '0.5px gray',
                    'color': 'transparent'
                },
                '.text-outline-4': {
                    '-webkit-text-stroke': '1px gray',
                    'color': 'transparent'
                }
            }
            addUtilities(newUtilities, ['responsive', 'hover']);
        }
    ],
}