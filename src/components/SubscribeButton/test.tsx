import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SubscribeButton from '.'

describe('<SubscribeButton />', () => {
  it('should render the ...', () => {
    renderWithTheme(<SubscribeButton />)

    expect(
      screen.getByRole('button', { name: /subscribe now/i })
    ).toBeInTheDocument()
  })
})
