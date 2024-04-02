module.exports = {
  content: ["./src/*.{html,js}", "./src/*.html"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'fira': ['Fira Code'],
      'mplus': ["'M PLUS Rounded 1c', 'Verdana', 'sans-serif'"],
      'nerd': ['Hack Nerd Font Mono']
    },
    extend: {
      width: {
        '256': '60rem',
        '150': '50rem',
        '640': '40rem',
        '300': '30rem',
        '180': '18rem',
        '128': '30rem'
      },
      height: {
        '300': '30rem',
        '640': '40rem',
        '360': '90rem',
        '180': '18rem'
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
