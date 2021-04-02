import { FaGithub } from 'react-icons/fa'
import { signIn, signOut, useSession } from 'next-auth/client'

import * as S from './styles'

const GithubButton = () => {
  const [session] = useSession()

  const handleButtonAction = (): Promise<void> => {
    if (session) return signOut()
    return signIn('github')
  }

  return (
    <S.Wrapper isLogged={session} onClick={handleButtonAction}>
      <FaGithub />
      {session ? session.user.name : 'Sign in with Github'}
      {session && <S.CloseButton />}
    </S.Wrapper>
  )
}

export default GithubButton
