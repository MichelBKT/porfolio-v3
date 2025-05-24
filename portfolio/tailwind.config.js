/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "text-gradient": "linear-gradient(90deg, rgba(42,5,41,1) 8%, rgba(0,240,255,1) 100%)",
            },
            colors: {
                'galaxy-dark': '#0a0a1a',
                'galaxy-light': '#4a90e2',
                'galaxy-blue': '#1E1E2E',
                'galaxy-purple': '#6B46C1',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'blink': 'blink 1s step-end infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
        },
    },
    plugins: [],
}