import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 260px;
    height: ${theme.spacings.xxlarge};
    font-size: 1.25rem;
    font-weight: ${theme.font.bold};
    border: 0;
    border-radius: ${theme.spacings.small};
    background: ${theme.colors.yellow};
    color: ${theme.colors.black};

    transition: filter ${theme.transition.default};

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
