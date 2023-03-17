import React, { memo, useEffect, useState } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Icons
import { BiSearch } from 'react-icons/bi'
import InstagramIcon from '../../assets/icons/instagram.png'
import LinkedinIcon from '../../assets/icons/linkedin.png'
import MicrosoftEdgeIcon from '../../assets/icons/microsoft.png'
import OfficeIcon from '../../assets/icons/office.png'
import XboxIcon from '../../assets/icons/xbox.png'
import XDIcon from '../../assets/icons/xd.png'
import PhotoshopIcon from '../../assets/icons/photoshop.png'
import IllustratorIcon from '../../assets/icons/illustrator.png'
import AfterEffectsIcon from '../../assets/icons/after-effects.png'
import LightroomIcon from '../../assets/icons/lightroom.png'
import AuditionIcon from '../../assets/icons/adobe-audition.png'
import YoutubeIcon from '../../assets/icons/youtube.png'
import ChromeIcon from '../../assets/icons/chrome.png'
import FirefoxIcon from '../../assets/icons/firefox.png'
import NotepadIcon from '../../assets/icons/notepad.png'

// Types
import { IFixedRowItem, IMenu } from './types'

// Components
import { IconBar, IconContent } from '../IconBar'

// Styles
import {
  Container, Content, Header, RowContainer, RowContent, RowHeader, RowIconWrapper, Footer, RowIconHeader, RowGroupItemsContainer
} from './styles'

const Menu: React.FC<IMenu> = () => {
  const [fixedMatriz, setFixedMatriz] = useState<Array<Array<IFixedRowItem>>>([]);
  const { state } = useHooksContextReducer()

  useEffect(() => {
    const groupOne = [
      {
        id: new Date().getTime(),
        icon: MicrosoftEdgeIcon,
        name: 'Edge'
      },
      {
        id: new Date().getTime(),
        icon: OfficeIcon,
        name: 'Office'
      },
      {
        id: new Date().getTime(),
        icon: LinkedinIcon,
        name: 'Linkedin'
      },
      {
        id: new Date().getTime(),
        icon: InstagramIcon,
        name: 'Instagram'
      },
      {
        id: new Date().getTime(),
        icon: XboxIcon,
        name: 'Xbox',
        wrapperImage: 'icon-xbox'
      },
      {
        id: new Date().getTime(),
        icon: XDIcon,
        name: 'Adobe XD'
      },
      {
        id: new Date().getTime(),
        icon: PhotoshopIcon,
        name: 'Photoshop'
      },
      {
        id: new Date().getTime(),
        icon: IllustratorIcon,
        name: 'Illustrator'
      },
      {
        id: new Date().getTime(),
        icon: AfterEffectsIcon,
        name: 'After Effects'
      },
      {
        id: new Date().getTime(),
        icon: LightroomIcon,
        name: 'Lightroom'
      },
      {
        id: new Date().getTime(),
        icon: AuditionIcon,
        name: 'Audition'
      },
      {
        id: new Date().getTime(),
        icon: YoutubeIcon,
        name: 'Youtube'
      },
      {
        id: new Date().getTime(),
        icon: ChromeIcon,
        name: 'Chrome'
      },
      {
        id: new Date().getTime(),
        icon: FirefoxIcon,
        name: 'Firefox'
      },
      {
        id: new Date().getTime(),
        icon: NotepadIcon,
        name: 'B. de Notas'
      },
    ]

    setFixedMatriz([
      groupOne
    ])
    return () => setFixedMatriz([])
  }, [])

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
            {
              fixedMatriz.length <= 0 ? 'Adicione um aplicativo para aparecer aqui...' : ''
            }
            {
              fixedMatriz.map((matriz, index) => {
                return (
                  <RowGroupItemsContainer key={index}>
                    {
                      matriz.map((item, index) => (
                        <IconBar key={item.id + '' + index} className="icon-bar icons-main-menu-first-row-content">
                          <IconContent>
                            <RowIconWrapper>
                              {
                                item?.wrapperImage ? (
                                  <div className={item.wrapperImage}>
                                    <img src={item.icon} alt="" />
                                  </div>
                                ) : <img src={item.icon} alt="" />
                              }
                              <span>{item.name}</span>
                            </RowIconWrapper>
                          </IconContent>
                        </IconBar>
                      ))
                    }
                  </RowGroupItemsContainer>
                )
              })
            }
            
          </RowContent>
        </RowContainer>

        <RowContainer>
          <RowHeader>
            <span>Recomendações</span>            
          </RowHeader>
          <RowContent>
            <IconBar className='icons-main-menu-second-row-content'>
              <IconContent> 
                {/* <RowIconWrapper>
                  <BsMicrosoftTeams />
                  <span>Microsoft Teams</span>
                </RowIconWrapper> */}
              </IconContent>
            </IconBar>

            <IconBar className='icons-main-menu-second-row-content'>
              <IconContent />
            </IconBar>

            <IconBar className='icons-main-menu-second-row-content'>
              <IconContent />
            </IconBar>

            <IconBar className='icons-main-menu-second-row-content'>
              <IconContent />
            </IconBar>

            <IconBar className='icons-main-menu-second-row-content'>
              <IconContent />
            </IconBar>

            <IconBar className='icons-main-menu-second-row-content'>
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
