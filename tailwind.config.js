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
            transform: 'translateY(+50%)',
            opacity: '0'
          }
        },
        init: {
          from: {
            transform: 'translateY(-50%)',
            opacity: '0'
            
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        close: 'close 0.25s ease-in-out infinite',
        init: 'init 0.25s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
