module.exports = {
  content: ["./src/*.{html,js}", "./src/*.html"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'fira': ['Fira Code'],
      'mplus': ["'M PLUS Rounded 1c', 'Verdana', 'sans-serif'"]
    },
    extend: {
      width: {
        '256': '60rem',
        '150': '50rem',
        '128': '30rem'
      },
      height: {
        '150': '30rem'
      },
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
