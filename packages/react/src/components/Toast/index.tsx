import { ComponentProps, ReactNode } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import {
  CloseButton,
  Description,
  Title,
  ToastContainer,
  Viewport,
} from './style'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: ReactNode
  position?: 'bottom' | 'top'
}

export function Toast({ title, description, position, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastContainer {...props}>
        <Title>{title}</Title>

        <Description asChild>{description}</Description>

        <CloseButton aria-label="Fechar">
          <X />
        </CloseButton>
      </ToastContainer>

      <Viewport position={position} />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
