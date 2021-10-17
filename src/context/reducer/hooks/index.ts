import { useContext } from 'react'

// Context
import { ContextReducer } from '../../index'

export function useHooksContextReducer() {
  return useContext(ContextReducer)
}
