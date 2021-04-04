import { signIn, useSession } from 'next-auth/client'

import * as S from './styles'

type SubscribeButtonProps = {
  priceId: string
}

const SubscribeButton = () => {
  const [session] = useSession()

  const handleSubscribe = () => {
    if (!session) {
      signIn('github')
      return
    }
  }

  return (
    <S.Wrapper type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.Wrapper>
  )
}
export default SubscribeButton
