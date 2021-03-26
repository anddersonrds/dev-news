import { FaGithub } from 'react-icons/fa'

import * as S from './styles'

const GithubButton = () => {
  const isUserLogged = true

  return (
    <S.Wrapper isLogged={isUserLogged}>
      <FaGithub />
      {isUserLogged ? 'Anderson Rodrigues' : 'Sign in with Github'}
      {isUserLogged && <S.CloseButton />}
    </S.Wrapper>
  )
}

export default GithubButton
