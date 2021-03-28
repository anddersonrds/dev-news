import * as S from './styles'

type SubscribeButtonProps = {
  priceId: string
}

const SubscribeButton = ({ priceId }: SubscribeButtonProps) => (
  <S.Wrapper type="button">Subscribe now</S.Wrapper>
)

export default SubscribeButton
