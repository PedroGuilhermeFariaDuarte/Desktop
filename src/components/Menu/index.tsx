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
  MenuContainer, UserAppsContainer,
  UserAppsHeader, UserAppContent, UserAppsTitle, UserAppPin,
  IconTaskBarContainer, IconTaskBarContent, IconMenu, UserActions
} from './styles'

const Menu: React.FC<IMenu> = () => {
  const { state } = useHooksContextReducer()

  return (
    <MenuContainer
      className={state?.open === false ? 'action-menu' : ''}
    >
      <InputContainer
        borderShowed={true}
      >
        <BiSearch />
        <input type='search' placeholder='Type here to search' />
      </InputContainer>
      <UserAppsContainer>
        <UserAppsHeader>
          <UserAppsTitle>Pinned</UserAppsTitle>
          <UserAppPin>
            All apps
            <IoIosArrowForward />
          </UserAppPin>
        </UserAppsHeader>
        <UserAppContent>
          <IconTaskBarContainer>
            <IconTaskBarContent>
              <IconMenu>
                <DiAndroid />
                ONEDEV
              </IconMenu>
            </IconTaskBarContent>

            <IconTaskBarContent>
              <IconMenu>
                <SiFlutter />
                ONEDEV:\\E
              </IconMenu>
            </IconTaskBarContent>
          </IconTaskBarContainer>
        </UserAppContent>
      </UserAppsContainer>
      <UserAppsContainer>
        <UserAppsHeader>
          <UserAppsTitle>Recommend</UserAppsTitle>
          <UserAppPin>
            More
            <IoIosArrowForward />
          </UserAppPin>
        </UserAppsHeader>
        <UserAppContent />
      </UserAppsContainer>
      <UserActions>
        <h1>ONEDEV</h1>
        <MdPowerSettingsNew />
      </UserActions>
    </MenuContainer>
  )
}


export default memo(Menu)
