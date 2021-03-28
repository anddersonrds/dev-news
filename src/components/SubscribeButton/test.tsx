import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SubscribeButton from '.'

describe('<SubscribeButton />', () => {
  it('should render the ...', () => {
    const { container } = renderWithTheme(<SubscribeButton />)

    // expect(
    //   screen.getByRole('heading', { name: /Hauhauhaoh/i })
    // ).toBeInTheDocument()

    // screen.logTestingPlaygroundURL()
    // expect(container.firstChild).toMatchSnapshot()
  })
})
