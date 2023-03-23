import { Meta, StoryObj } from '@storybook/react'
import { Text, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    text: 'Create new',
    children: <Text css={{ maxWidth: 'fit-content' }}>Example text</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
