import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render the Header', () => {
    renderWithTheme(<Header />)

    expect(screen.getByRole('img', { name: /dev\.news/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /posts/i })).toBeInTheDocument()
  })
})
