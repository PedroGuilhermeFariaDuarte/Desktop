import { PropsWithChildren } from 'react'

// FROM LEFT TO RIGHT
type TAsideArea = 
  // LEFT POSITIONS: 
  '1 / 1 / 2 / 2' | '1 / 1 / 2 / 3' | 
  '2 / 1 / 2 / 2' | '2 / 1 / 2 / 3' | 
  // RIGHT POSITIONS: 
  '1 / 2 / 1 / 3' | '1 / 2 / 3 / 3' | 
  '1 / 2 / 2 / 3' | '2 / 2 / 3 / 3' | string

export interface ITaskBar extends PropsWithChildren<any> {
  //
}

export interface IAsideCard {
  gridArea?: TAsideArea
  height?: string
}