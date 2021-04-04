import { signIn, useSession } from 'next-auth/client'
import { api } from 'services/api'
import { getStripeJS } from 'services/stripe-js'

import * as S from './styles'

const SubscribeButton = () => {
  const [session] = useSession()

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data
      const stripe = await getStripeJS()

      await stripe?.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <S.Wrapper type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.Wrapper>
  )
}
export default SubscribeButton
