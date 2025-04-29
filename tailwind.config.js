module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 0.3s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(-10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        colors: {
          primary: {
            light: '#4f46e5',
            DEFAULT: '#4338ca',
            dark: '#3730a3',
          },
          secondary: {
            light: '#f97316',
            DEFAULT: '#ea580c',
            dark: '#c2410c',
          },
        },
      },
    },
    plugins: [],
  }