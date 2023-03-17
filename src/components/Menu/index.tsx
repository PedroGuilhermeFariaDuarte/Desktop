import React, { memo } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Icons
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { DiAndroid } from 'react-icons/di'
import { SiFlutter } from 'react-icons/si'
import { MdPowerSettingsNew } from 'react-icons/md'

// Types
import { IMenu } from './types'

// Components
import { InputContainer } from '../Input'

// Styles
import {
  Container
} from './styles'

const Menu: React.FC<IMenu> = () => {
  const { state } = useHooksContextReducer()

  return (
    <Container opened={state.open}>      
    </Container>
  )
}


export default memo(Menu)
