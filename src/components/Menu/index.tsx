import React, { memo } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Icons
import { BiSearch } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import InstagramIcon from '../../assets/icons/instagram.png'
import LinkedinIcon from '../../assets/icons/linkedin.png'
import MicrosoftEdgeIcon from '../../assets/icons/microsoft.png'
import OfficeIcon from '../../assets/icons/office.png'
import XboxIcon from '../../assets/icons/xbox.png'

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
                  <img src={MicrosoftEdgeIcon} alt="" />
                  <span>Edge</span>
                </RowIconWrapper>
              </IconContent>
            </IconBar>

            <IconBar>
              <IconContent>
                <RowIconWrapper>
                  <img src={OfficeIcon} alt="" />
                  <span>Office</span>
                </RowIconWrapper>
              </IconContent>
            </IconBar>

            <IconBar>
              <IconContent>
                <RowIconWrapper>
                  <img src={LinkedinIcon} alt="" />
                  <span>Linkedin</span>
                </RowIconWrapper>
              </IconContent>
            </IconBar>

            <IconBar>
              <IconContent>
                <RowIconWrapper>
                  <img src={InstagramIcon} alt="" />
                  <span>Instagram</span>
                </RowIconWrapper>
              </IconContent>
            </IconBar>

            <IconBar>
              <IconContent>
                <RowIconWrapper>
                  <span className='icon-xbox'>
                    <img src={XboxIcon} alt="" />
                  </span>
                  <span>Xbox</span>
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
          </RowContent>
        </RowContainer>

        <RowContainer>
          <RowHeader>
            <span>Recomendações</span>            
          </RowHeader>
          <RowContent>
            <IconBar>
              <IconContent> 
                {/* <RowIconWrapper>
                  <BsMicrosoftTeams />
                  <span>Microsoft Teams</span>
                </RowIconWrapper> */}
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
