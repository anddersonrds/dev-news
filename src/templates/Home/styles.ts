import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    height: calc(100vh - ${theme.spacings.huge});
    margin: 0 auto;
    padding: 0 2rem;
  `}
`

export const Hero = styled.div`
  ${({ theme }) => css`
    max-width: 600px;

    > span {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.bold};
    }

    h1 {
      font-size: ${theme.font.sizes.huge};
      line-height: ${theme.font.sizes.huge};
      font-weight: ${theme.font.black};
      margin-top: ${theme.spacings.medium};

      span {
        color: ${theme.colors.cyan};
      }
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      line-height: 2.25rem;
      margin-top: ${theme.spacings.xsmall};

      span {
        color: ${theme.colors.cyan};
        font-weight: ${theme.font.bold};
      }
    }

    button {
      margin-top: ${theme.spacings.medium};
    }
  `}
`
