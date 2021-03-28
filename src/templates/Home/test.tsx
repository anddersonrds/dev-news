import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render the Home Page', () => {
    const product = {
      priceId: 'jbajbas',
      amount: 2.5
    }

    renderWithTheme(<Home product={product} />)

    expect(
      screen.getByRole('heading', {
        name: /new about the react world\./i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/for 2\.5 month/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /subscribe now/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /girl coding/i
      })
    ).toBeInTheDocument()
  })
})
