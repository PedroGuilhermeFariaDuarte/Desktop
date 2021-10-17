import React, { memo } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Context Actions
import { actionReducerMenu, actionReducerWidgets } from '../../context/reducer/actions'

// Icons
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowUp } from 'react-icons/io'
import { AiOutlineSound } from 'react-icons/ai'
import { BsBatteryFull } from 'react-icons/bs'
import { MdSignalWifi4Bar } from 'react-icons/md'

// Types
import { ITaskBar } from './types'

// Styles
import { Container, ActionContent, InfoContent, WindowsLogo, SearchIcon, IconTaskBar, WindowsWidgets } from './styles'


const TaskBar: React.FC<ITaskBar> = () => {
  const { state, dispatch } = useHooksContextReducer()

  return (
    <Container>
      <ActionContent>
        <IconTaskBar
          onClick={() => dispatch(actionReducerMenu(!state?.open))}
        >
          <WindowsLogo>
            <div className='quad'></div>
            <div className='quad'></div>
            <div className='quad'></div>
            <div className='quad'></div>
          </WindowsLogo>
        </IconTaskBar>
        <IconTaskBar>
          <SearchIcon>
            <BiSearch />
          </SearchIcon>
        </IconTaskBar>
        <IconTaskBar>
          <WindowsWidgets
            onClick={() => dispatch(actionReducerWidgets(!state?.widgets))}
          >
            <div className='bar'></div>
            <div className='bar'></div>
          </WindowsWidgets>
        </IconTaskBar>
      </ActionContent>
      <InfoContent>
        <IoIosArrowUp />
        <AiOutlineSound />
        <BsBatteryFull />
        <MdSignalWifi4Bar />
        <span>
          <span>15:50</span>
          <span>28/06/2021</span>
        </span>
      </InfoContent>
    </Container>
  )
}

export default memo(TaskBar)
