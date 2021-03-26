import { FiX } from 'react-icons/fi'
import styled, { css } from 'styled-components'

type GithubBtnProps = {
  isLogged: boolean
}

export const Wrapper = styled.button<GithubBtnProps>`
  ${({ theme, isLogged }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.spacings.large};
    border-radius: ${theme.spacings.large};
    border: 0;
    padding: 0 ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    background: ${theme.colors.githubBtn};

    transition: filter ${theme.transition.default};

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      width: 20px;
      height: 20px;

      &:first-child {
        color: ${isLogged ? '#04d361' : '#eba417'};
        margin-right: ${theme.spacings.xxsmall};
      }
    }
  `}
`

export const CloseButton = styled(FiX)`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    color: '#737380';
  `}
`
