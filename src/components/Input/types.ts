import { HTMLAttributes } from 'react'
import { StyledProps } from 'styled-components'

export interface IInput extends StyledProps<HTMLAttributes<any>> {
  borderShowed?: boolean
  borderAll?: boolean
}
