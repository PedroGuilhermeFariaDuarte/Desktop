import React, { memo, useEffect, useState } from 'react'

// Context Hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Icons
import { SiMicrosoftbing } from 'react-icons/si'
import { BiSearch } from 'react-icons/bi'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
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
import PictureIcon from '../../assets/icons/picture.png'
import PaintIcon from '../../assets/icons/paint-palette.png'
import GrooveIcon from '../../assets/icons/groove-music.png'
import { RiArrowRightSLine } from 'react-icons/ri'

// Types
import { IFixedRowItem, IMenu } from './types'

// Components
import { IconBar, IconContent } from '../IconBar'

// Styles
import {
  Container, Content, Header, RowContainer, RowContent, RowHeader, RowIconWrapper, Footer, 
  GroupItemsContainer, GroupItemsContent, RowFooter, RowScrollController, 
  DotPageContainer, DotPage, GroupItemsScrollable, LastedIconsText
} from './styles'

const Menu: React.FC<IMenu> = () => {
  const [fixedMatriz, setFixedMatriz] = useState<Array<Array<IFixedRowItem>>>([]);  
  const [pageInFocus, setPageInFocus] = useState(0)
  const { state } = useHooksContextReducer()

  // AUX Variables
  const isFirstPage = pageInFocus === 0 && true
  const isLastPage = fixedMatriz.length > 1 && fixedMatriz.length - 1 === pageInFocus && true
    
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
    const groupTwo = [
      {
        id: new Date().getTime(),
        icon: PictureIcon,
        name: 'Fotos'
      },
      {
        id: new Date().getTime(),
        icon: PaintIcon,
        name: 'Paint'
      },
      {
        id: new Date().getTime(),
        icon: GrooveIcon,
        name: 'Groove'
      },      
    ]

    setFixedMatriz([
      groupOne,
      groupTwo
    ])
    return () => setFixedMatriz([])
  }, [])

  useEffect(() => {
    try {      
      if (pageInFocus <= -1) throw new Error(`The actual page is invalid`)

      const groupItemsScrollableElement = document.querySelector(`#group-items-scrollable`) as HTMLDivElement
      const groupItemsElement = document.querySelector(`#group-items-container-${pageInFocus}`) as HTMLDivElement

      if (!groupItemsElement || !groupItemsScrollableElement) throw new Error(`The group items ${pageInFocus} not exits`)

      if (pageInFocus === 0) {
        groupItemsScrollableElement.scrollTo({
          top:0,
          behavior: 'smooth' 
        })
      }else{
        const actualPositionGroupItemsElement = groupItemsElement.offsetTop          
  
        groupItemsScrollableElement.scrollTo({
          top: actualPositionGroupItemsElement,
          behavior: 'smooth' 
        })
      }

    } catch (error) {
      console.log(`Menu@useEffect ~ error`, error)
    }
  
  }, [pageInFocus])  

  function handleSetNewPage(indentifiyPage = -1){
    try {
      if (indentifiyPage <= -1 || (fixedMatriz.length > 1 && indentifiyPage > fixedMatriz.length)) return

      setPageInFocus(indentifiyPage)
    } catch (error) {
      console.log('Menu@Component ~ error', error)
    }
  }

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
            <IconBar className='icons-main-menu-header'>
              <IconContent>
                Todos os aplicativos
                <RiArrowRightSLine />
              </IconContent>
            </IconBar>          
          </RowHeader>
          <RowContent>
            {
              fixedMatriz.length <= 0 ? 'Adicione um aplicativo para aparecer aqui...' : ''
            }
            <GroupItemsScrollable>
              {
                fixedMatriz.map((group, index) => {
                  return (
                    <GroupItemsContainer key={index} id={`group-items-container-${index}`}>
                      <GroupItemsContent id={`group-items-content-${index}`}>
                        {
                          group.map((item, index) => (
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
                      </GroupItemsContent>
                    </GroupItemsContainer>
                  )
                })
              }
            </GroupItemsScrollable>

            <RowFooter>
              <RowScrollController isFirstPage={isLastPage} isLastPage={isFirstPage}>
                <span className="arrows" id="arrow-up" title='Pagina Anterior' onClick={() => handleSetNewPage(pageInFocus - 1)}>
                  <TiArrowSortedUp />
                </span>

                <DotPageContainer>
                   {
                    fixedMatriz.map((_group, index) => <DotPage onClick={() => handleSetNewPage(index)} key={index} pageInFocus={index === pageInFocus} />)                    
                   }                  
                </DotPageContainer>

                <span className="arrows" id="arrow-down" title='Próxima Página' onClick={() => handleSetNewPage(pageInFocus + 1)}>
                  <TiArrowSortedDown />
                </span>
              </RowScrollController>
            </RowFooter>
            
          </RowContent>
        </RowContainer>

        <RowContainer>
          <RowHeader>
            <span>Recomendações</span>   
            <IconBar className='icons-main-menu-header'>
              <IconContent>
                Mais
                <RiArrowRightSLine />
              </IconContent>
            </IconBar>          
          </RowHeader>
          <RowContent>
            <GroupItemsContainer>
              <GroupItemsContent>
                <IconBar className='icons-main-menu-second-row-content'>
                  <IconContent> 
                    <RowIconWrapper>
                      <SiMicrosoftbing />
                      <LastedIconsText>
                        <span>Bing</span> 
                        <span>Adicionados recentemente</span>                      
                      </LastedIconsText>
                    </RowIconWrapper>
                  </IconContent>
                </IconBar>               

              </GroupItemsContent>
            </GroupItemsContainer>
          </RowContent>
        </RowContainer>
      </Content>    
      <Footer>
        <IconBar className='icons-main-menu-footer'>
          <IconContent> 
            <span id="image-profile">
              <img src="https://avatars.githubusercontent.com/u/16112395?v=4" alt=""/>
            </span>           
            <span>Pedro Guilherme Faria Duarte</span>                            
          </IconContent>
        </IconBar>  
        <IconBar className='icons-main-menu-footer'>
          <IconContent> 
            🎉
          </IconContent>
        </IconBar>  
      </Footer>
    </Container>
  )
}


export default memo(Menu)
