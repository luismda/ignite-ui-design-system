import * as Tooltip from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

const opacityIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
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

export const Content = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '$short',
  textAlign: 'center',
  color: '$gray100',
  backgroundColor: '$gray900',
  userSelect: 'none',
  zIndex: 2,

  '&[data-state="delayed-open"]': {
    animation: `${opacityIn} 160ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${opacityOut} 160ms ease-out`,
  },
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
