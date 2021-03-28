import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme, removeBg }) => css`
    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 93.75%;
      }
    }

    body {
      color: ${theme.colors.white};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }

    body,
    input,
    textarea,
    select,
    button {
      font-weight: ${theme.font.regular};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.xxsmall};
    }

    button {
      cursor: pointer;
    }
  `};
`

export default GlobalStyles
