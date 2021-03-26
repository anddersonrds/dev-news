import { Story, Meta } from '@storybook/react/types-6-0'

import GithubButton from '.'

export default {
  title: 'GithubButton',
  component: GithubButton
} as Meta

export const Default: Story = () => <GithubButton />
