import { Meta, StoryObj } from '@storybook/react'
import { Text, Box, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    text: 'Create new',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            minWidth: '$space$80',
            minHeight: '$space$40',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Story({
            args: {
              text: 'Create new',
              children: (
                <Text css={{ maxWidth: 'fit-content' }}>Hover the cursor</Text>
              ),
            } as TooltipProps,
          })}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
