import React, { memo } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Icons
import { BiSearch } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { BsMicrosoftTeams } from 'react-icons/bs'

// Types
import { IMenu } from './types'

// Components
import { IconBar, IconContent } from '../IconBar'

// Styles
import {
  Container, Content, Header, RowContainer, RowContent, RowHeader, RowIconWrapper, Footer
} from './styles'

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
           
          </RowContent>
        </RowContainer>
      </Content>    
      <Footer />
    </Container>
  )
}


export default memo(Menu)
