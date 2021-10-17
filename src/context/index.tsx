import React, { createContext, useReducer } from 'react'

// Types
import { IContext, IContextProvider } from './types'

// Reducer
import { initialState, reducer } from './reducer'

export const ContextReducer = createContext<IContext>({ state: initialState, dispatch: () => { } });
ContextReducer.displayName = 'Context Reducer'

export const ContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <ContextReducer.Provider value={{ state, dispatch }}>
      {
        children
      }
    </ContextReducer.Provider>
  )
}
