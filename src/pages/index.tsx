import { GetStaticProps } from 'next'
import { stripe } from 'services/stripe'

import Home, { HomeProps } from 'templates/Home'

export default function Index({ product }: HomeProps) {
  return <Home product={product} />
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Ia4IfCf6WPPPJ3YO8oX2q2W')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}
