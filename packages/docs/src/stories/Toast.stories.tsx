import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    position: 'bottom',
    duration: 5000,
  },
  argTypes: {
    position: {
      options: ['bottom', 'top'],
      control: {
        type: 'inline-radio',
      },
    },
    duration: {
      control: {
        type: 'number',
      },
    },
  },
  decorators: [
    (Story, { args }) => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button onClick={() => setOpen(true)}>Show Toast</Button>
          {Story({
            args: {
              title: 'Scheduled',
              description: <time>Thursday, 23 of March, 04:00 PM</time>,
              position: args.position,
              duration: args.duration,
              open,
              onOpenChange: setOpen,
            } as ToastProps,
          })}
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const PositionTop: StoryObj<ToastProps> = {
  args: {
    position: 'top',
  },
}

export const LongTime: StoryObj<ToastProps> = {
  args: {
    duration: 15000,
  },
}
