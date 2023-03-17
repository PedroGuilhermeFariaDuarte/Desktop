import { PropsWithChildren } from 'react'


export interface IMenu extends PropsWithChildren<any> {
  //
}

export interface IMenyStyledProps {
  opened: boolean
}

export interface IFixedRowItem {
  id: number
  name: string
  icon: string,
  wrapperImage?: string | undefined  
}

export interface IRowScrollControllerStyledProps {  
  isLastPage: boolean
  isFirstPage: boolean
}

export interface IDotPageContainerStyledProps {  
}

export interface IDotPageStyledProps {
  pageInFocus: boolean  
}