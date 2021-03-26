export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: 'Roboto, sans-serif',
    regular: 400,
    bold: 700,
    black: 900,
    sizes: {
      small: '1rem',
      medium: '2rem',
      large: '3rem'
    }
  },
  colors: {
    white: '#FAFAFA',
    yellow: '#eba417',
    cyan: '#61dafb',
    gray: '#e1e1e6',
    darkGray: '#a8a8b3',
    softBlack: '#29292e',
    black: '#121214',
    mainBg: '#121214'
  },
  spacings: {
    xxsmall: '1rem',
    xsmall: '1.5rem',
    small: '2rem',
    medium: '2.5rem',
    large: '3rem',
    xlarge: '3.5rem',
    xxlarge: '4rem',
    huge: '5rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.2s',
    fast: '0.1s'
  }
} as const
