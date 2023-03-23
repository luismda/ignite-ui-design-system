import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  listStyle: 'none',
  outline: 0,
  width: 'calc($80 + $20)',
  maxWidth: '100vw',
  zIndex: 2,

  variants: {
    position: {
      bottom: {
        bottom: '$8',
        right: '$8',
      },
      top: {
        top: '$8',
        right: '$8',
      },
    },
  },

  defaultVariants: {
    position: 'bottom',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(110%)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0)',
    opacity: 1,
  },
})

const opacityOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-in`,
  },

  '&[data-state="closed"]': {
    animation: `${opacityOut} 200ms ease-out`,
  },

  '&:focus': {
    outline: 0,
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})

export const Title = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
})

export const Description = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
})

export const CloseButton = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
  lineHeight: 0,
  borderRadius: '$xs',

  svg: {
    color: '$white',
    width: '$5',
    height: '$5',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
