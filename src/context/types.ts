import { PropsWithChildren } from 'react'

// Types
import { IReducer } from './reducer/types';

export interface IContext {
  state: IReducer
  dispatch: Function
}

export interface IContextProvider extends PropsWithChildren<any> {
  //
}
