// Types
import { IReducer } from './types'

export const initialState: IReducer = {
  open: false,
  widgets: false
}

export function reducer(state: IReducer = initialState, action: any) {
  switch (action.type) {
    case 'MENU':
      return { ...state, open: action?.payload?.open }
    case 'WIDGETS':
      return { ...state, widgets: action?.payload?.widgets }
    default:
      return state
  }
}
