import React, { memo } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Icons
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { DiAndroid } from 'react-icons/di'
import { SiFlutter } from 'react-icons/si'
import { MdEmail, MdPowerSettingsNew } from 'react-icons/md'

// Types
import { IMenu } from './types'

// Components
import { IconBar, IconContent } from '../IconBar'

// Styles
import {
  Container, Content, Header, RowContainer, RowContent, RowHeader, RowIconWrapper
} from './styles'
import { BsMicrosoftTeams } from 'react-icons/bs'

const Menu: React.FC<IMenu> = () => {
  const { state } = useHooksContextReducer()

  return (
    <Container opened={state.open}>
      <Header>
        <div id="input-container">
          <BiSearch />
          <input type="search"  placeholder='Pesquisa aplicativos, configurações e documentos'/>
        </div>
      </Header>  
      <Content>
        <RowContainer>
          <RowHeader>
            <span>Fixado</span>            
          </RowHeader>
          <RowContent>
            <IconBar>
              <IconContent> 
                <RowIconWrapper>
                  <MdEmail />
                  <span>Email</span>
                </RowIconWrapper>
              </IconContent>
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>
          </RowContent>
        </RowContainer>

        <RowContainer>
          <RowHeader>
            <span>Recomendações</span>            
          </RowHeader>
          <RowContent>
            <IconBar>
              <IconContent> 
                <RowIconWrapper>
                  <BsMicrosoftTeams />
                  <span>Microsoft Teams</span>
                </RowIconWrapper>
              </IconContent>
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>

            <IconBar>
              <IconContent />
            </IconBar>
          </RowContent>
        </RowContainer>
      </Content>    
    </Container>
  )
}


export default memo(Menu)
