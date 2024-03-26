module.exports = {
  content: ["./src/*.{html,js}", "./src/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        close: {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(+40%)',
            opacity: '0'
          }
        },
        initial: {
          from: {
            transform: 'translateY(-40%)',
            opacity: '0'
          },
          to: {
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        close: 'close 0.2s ease-in-out infinite',
        initial: 'initial 0.2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
