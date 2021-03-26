import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 5rem;
    border-bottom: 1px solid ${theme.colors.softBlack};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    max-width: 1120px;
    height: ${theme.spacings.huge};
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};
  `}
`

export const Navigation = styled.nav`
  ${({ theme }) => css`
    height: ${theme.spacings.huge};
    margin-left: ${theme.spacings.huge};

    > a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: ${theme.spacings.huge};
      line-height: ${theme.spacings.huge};
      color: ${theme.colors.gray};
      text-decoration: none;

      transition: color ${theme.transition.default};

      & + a {
        margin-left: ${theme.spacings.small};
      }

      &:hover {
        color: ${theme.colors.white};
      }

      &.active {
        color: ${theme.colors.white};
        font-weight: ${theme.font.bold};

        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          bottom: 1px;
          left: 0;
          border-radius: 3px 3px 0 0;
          background: ${theme.colors.yellow};
        }
      }
    }
  `}
`
