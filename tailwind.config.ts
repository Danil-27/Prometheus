/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontSize: {
      xs: '1.5rem', // 24px
      sm: '1.875rem', // 30px
      lg: '6.25rem' // 100px
    },
    container: false,
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1920px'
    },
    colors: {
      white: 'var(--white)',
      'white-80': 'var(--white-80)',
      'white-25': 'var(--white-25)',
      black: 'var(--black)',
      'black-40': 'var(--black-40)',
      Carbonic: 'var(--Carbonic)',
      Onyx: 'var(--Onyx)',
      anthracite: 'var(--anthracite)',
      grey: 'var(--grey)',
      yellow: 'var(--yellow)',
      green: 'var(--green)',
      grayLight: 'var(--grayLight)',
      greenSilver: 'var(--greySilver)',
      dimGray: 'var(--dimGray)'
    },
    fontFamily: {
      jetReg: ['JetRegular', 'sans-serif'],
      jetBold: ['JetBold', 'sans-serif'],
      jetExtraB: ['JetExtraBold', 'sans-serif'],
      InterBold: ['InterBold', 'sans-serif'],
      interReg: ['InterRegular', 'sans-serif'],
      intertLight: ['InterLight', 'sans-serif'],
      sora: ['Sora', 'sans-serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        xs: '30px',
        base: '50px'
      }
    },
    boxShadow: {
      'custom-white-btn': '0 4px 4px rgba(0,0,0,0.25), inset 0 4px 4px rgba(0,0,0,0.25)',
      'custom-black-btn': '0 4px 4px 0 rgba(0, 0, 0, 0.25), inset 5px 9px 12px 0 var(--white-25)',
      image: '0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2)',
      buttom: ' 0px 0px 10px 1px rgba(241, 218, 208, 0.9)'
    }
  }
};
