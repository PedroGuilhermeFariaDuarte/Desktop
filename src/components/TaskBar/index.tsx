import React, { memo } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Context Actions
import { actionReducerMenu, actionReducerWidgets } from '../../context/reducer/actions'

// Icons
import { IoIosArrowUp } from 'react-icons/io'
import { AiOutlineSound } from 'react-icons/ai'
import { BsBatteryFull } from 'react-icons/bs'
import { MdSignalWifi4Bar } from 'react-icons/md'

// Types
import { ITaskBar } from './types'

// Components
import {IconBar, IconContent } from "../../components/IconBar";
import Widgets from '../Widgets'

// Styles
import { Container, Content, InfoContent } from './styles'
import { WindowsIcon } from '../WindowIcon'
import { Searchable } from '../Searchable'


const TaskBar: React.FC<ITaskBar> = () => {
  const { state, dispatch } = useHooksContextReducer()  

  return (
    <Container>
      <Widgets />      
      <Content>
        <IconBar
          onClick={() => dispatch(actionReducerMenu(!state?.open))}
        >
          <IconContent>
            <WindowsIcon />
          </IconContent>
        </IconBar>
        <Searchable />
      </Content>
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
