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
import { RiArrowUpSLine } from 'react-icons/ri'
import LinkedinIcon from '../../assets/icons/linkedin.png'
import MicrosoftEdgeIcon from '../../assets/icons/microsoft.png'
import OfficeIcon from '../../assets/icons/office.png'
import XboxIcon from '../../assets/icons/xbox.png'


// Types
import { ITaskBar } from './types'

// Components
import {IconBar, IconContent } from "../../components/IconBar";
import Widgets from '../Widgets'

// Styles
import { Container, Content, InfoContent } from './styles'
import { WindowsIcon } from '../WindowIcon'
import { Searchable } from '../Searchable'
import { Notification } from '../Notification'


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
        <IconBar titleIcon='LinkedIn' className="icons-task-bar-apps">
          <IconContent>
            <img src={LinkedinIcon} alt=''/>
          </IconContent>
        </IconBar>   
        <IconBar titleIcon='Edge' className="icons-task-bar-apps">
          <IconContent>
            <img src={MicrosoftEdgeIcon} alt=''/>
          </IconContent>
        </IconBar>   
        <IconBar titleIcon='Office' className="icons-task-bar-apps">
          <IconContent>
            <img src={OfficeIcon} alt=''/>
          </IconContent>
        </IconBar>
      </Content>
      <InfoContent>
        <IconBar titleIcon='Mostrar icones ocultos' className="icons-task-bar-info">
          <IconContent>
            <RiArrowUpSLine />
          </IconContent>
        </IconBar>     
        <IconBar titleIcon='OneDrive - Pessoal atualizado' className="icons-task-bar-info">
          <IconContent>
            <DiOnedrive />
          </IconContent>
        </IconBar>     
        <IconBar titleIcon='Teclado Virutal' className="icons-task-bar-info">
          <IconContent>
            <BsKeyboard />
          </IconContent>
        </IconBar>     
        <IconBar titleIcon='Português (Brasil)' className="icons-task-bar-info">
          <IconContent>
           <span className='text-info'>POR</span>
           <br/>
           <span className='text-info'>PTB2</span>
          </IconContent>
        </IconBar>     
        <IconBar titleIcon='Wifi - Conectado' className="icons-task-bar-info">
          <IconContent>
            <GiNetworkBars />
            <CiVolumeHigh />
          </IconContent>
        </IconBar>     
       <Notification />
      </InfoContent>
    </Container>
  )
}

export default memo(TaskBar)
