import React, { memo } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Context Actions
import { actionReducerMenu, actionReducerWidgets } from '../../context/reducer/actions'

// Icons
import { GiNetworkBars } from 'react-icons/gi'
import { CiVolumeHigh } from 'react-icons/ci'
import { BsKeyboard } from 'react-icons/bs'
import { DiOnedrive } from 'react-icons/di'


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
        <IconBar className="icons-task-bar-info">
          <IconContent>
            <DiOnedrive />
          </IconContent>
        </IconBar>     
        <IconBar className="icons-task-bar-info">
          <IconContent>
            <BsKeyboard />
          </IconContent>
        </IconBar>     
        <IconBar className="icons-task-bar-info">
          <IconContent>
           <span className='text-info'>POR</span>
           <br/>
           <span className='text-info'>PTB2</span>
          </IconContent>
        </IconBar>     
        <IconBar className="icons-task-bar-info">
          <IconContent>
            <GiNetworkBars />
            <CiVolumeHigh />
          </IconContent>
        </IconBar>     
        <IconBar className="icons-task-bar-info">
          <IconContent>            
            <span id="date-hour">
              <span id="hour">15:50</span>
              <span id="date">28/06/2021</span>
            </span>            
          </IconContent>
        </IconBar>
      </InfoContent>
    </Container>
  )
}

export default memo(TaskBar)
