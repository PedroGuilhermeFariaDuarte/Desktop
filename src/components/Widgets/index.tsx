import React, { memo } from 'react'

// Icons
import { HiHome } from "react-icons/hi"
import { CgPlayButtonR } from "react-icons/cg"

// Context hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Types
import { IWidgets } from './types'

// Components
import { IconBar, IconContent } from '../IconBar'

// Styles
import { AsideHeader ,Aside, Container, AsideContent, AsideCard, AsideCardHeader, AsideCardContent, AsideCardSeparator, WidgetInfo } from './styles'
import { actionReducerWidgets } from '../../context/reducer/actions'

const Widgets: React.FC<IWidgets> = () => {
  const { state,dispatch } = useHooksContextReducer()  

  function handleOpenAside() {
    try {
      dispatch(actionReducerWidgets(!state.widgets))
    } catch (error) {
      console.log('Searchable@Component ~ error', error)
    }
  }

  return <>    
    <Aside opened={state.widgets}>      
      <AsideHeader>
        <div className='wrapper-icons'>
          <IconBar maxWidth='2.3rem'>
            <IconContent>
              <HiHome />
            </IconContent>
          </IconBar>
          <IconBar maxWidth='2.3rem'>
            <IconContent>
              <CgPlayButtonR />
            </IconContent>
          </IconBar>
        </div>

        <div className="wrapper-widget-info">
          <WidgetInfo>
            São Paulo          
            <span className="icon-weather"></span>          
            <div><span>25ºC</span></div>
          </WidgetInfo>        
        </div>   

        <div className="wrapper-info"></div>
      </AsideHeader>

      <AsideContent>
        <AsideCard gridArea='1 / 1 / 2 / 2'>
          <AsideCardHeader></AsideCardHeader>
          <AsideCardContent></AsideCardContent>
        </AsideCard>
        <AsideCardSeparator>
          <AsideCard gridArea='1 / 2 / 1 / 3' height={'9'} />
          <AsideCard gridArea='1 / 2 / 2 / 3' height={'9'} />
        </AsideCardSeparator>
        <AsideCard gridArea='2 / 1 / 2 / 3'>
          <AsideCardHeader></AsideCardHeader>
          <AsideCardContent></AsideCardContent>
        </AsideCard>
        <AsideCard gridArea='3 / 1 / 3 / 2'>
          <AsideCardHeader></AsideCardHeader>
          <AsideCardContent></AsideCardContent>
        </AsideCard>
        <AsideCard gridArea='3 / 2 / 3 / 2'>
          <AsideCardHeader></AsideCardHeader>
          <AsideCardContent></AsideCardContent>
        </AsideCard>
      </AsideContent>
    </Aside>    

    <Container onClick={handleOpenAside}>
      <IconBar maxWidth='12rem'>
        <IconContent>
            <WidgetInfo>
              <span className="icon-weather"></span>
              <div>
                <span>25ºC</span>
                <span>Ensolarado</span>
              </div>
            </WidgetInfo>
        </IconContent>
      </IconBar>
    </Container>
  </>  
}

export default memo(Widgets)
