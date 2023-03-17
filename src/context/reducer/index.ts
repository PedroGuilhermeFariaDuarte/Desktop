// Types
import { IReducer } from './types'

export const initialState: IReducer = {
  open: false,
  widgets: false,
  search: false
}

export function reducer(state: IReducer = initialState, action: any) {
  switch (action.type) {
    case 'MENU':
      return {
        ...state, 
        widgets: false,
        search: false,
        open: action?.payload?.open || false }
    case 'WIDGETS':
      return { 
        ...state, 
        search: false,
        open: false,
        widgets: action?.payload?.widgets || false }
    case 'SEARCH':
      return { 
        ...state, 
        widgets: false,
        open: false,
        search: action?.payload?.search || false 
      }
    default:
      return state
  }
}