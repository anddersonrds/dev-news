import Head from 'next/head'

import SubscribeButton from 'components/SubscribeButton'

import * as S from './styles'

export type HomeProps = {
  product: {
    priceId: string
    amount: number
  }
}

const Home = ({ product }: HomeProps) => (
  <>
    <Head>
      <title>Home | dev.news</title>
    </Head>

    <S.Wrapper>
      <S.Hero>
        <span>👏 Hey, welcome</span>
        <h1>
          New about the <span>React</span> world.
        </h1>
        <p>
          Get access to all the publications <br />
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton />
      </S.Hero>
      <img src="/img/avatar.svg" alt="Girl coding" />
    </S.Wrapper>
  </>
)

export default Home
