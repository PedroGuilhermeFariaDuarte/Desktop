import React, { memo } from 'react'

// Context hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Context Provide

// Icons
import { BiSearch } from 'react-icons/bi'

// Types
import { IWidgets } from './types'

// Components
import { InputContainer } from '../Input'
import Story from '../Story'

// Styles
import { WidgetContainer, WidgetHeader, WidgetContent, WidgetButton } from './styles'

const Widgets: React.FC<IWidgets> = () => {
  const { state } = useHooksContextReducer()
  return (
    <WidgetContainer
      className={state?.widgets === false ? 'action-widget ' : ''}
    >
      <WidgetHeader>
        <h1>
          {
            new Date()?.toLocaleTimeString()
          }
        </h1>
        <InputContainer
          borderShowed={false}
          borderAll={true}
        >
          <BiSearch />
          <input type='search' placeholder='Type here to search' />
        </InputContainer>
      </WidgetHeader>
      <WidgetContent>
        <WidgetButton>
          Add Widgets
        </WidgetButton>
        <Story />
      </WidgetContent>
    </WidgetContainer>
  )
}

export default memo(Widgets)
