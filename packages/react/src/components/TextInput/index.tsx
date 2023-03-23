import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './style'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  variant?: 'sm' | 'md'
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, variant = 'md', ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer variant={variant}>
        {!!prefix && <Prefix>{prefix}</Prefix>}

        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
