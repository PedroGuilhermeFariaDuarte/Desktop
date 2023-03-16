import React, { memo } from 'react'

// Context hooks
import { useHooksContextReducer } from '../../context/reducer/hooks'

// Types
import { IWidgets } from './types'

// Components
import { IconBar, IconContent } from '../IconBar'

// Styles
import { AsideContainer ,Aside, Container, AsideContent, AsideCard, AsideCardHeader, AsideCardContent, AsideCardSeparator } from './styles'

const Widgets: React.FC<IWidgets> = () => {
  const { state } = useHooksContextReducer()
  const cards = [1,2,3,4,5]
  let auxIndex = 1

  return <>
    <AsideContainer>
      <Aside>
        <AsideContent>         
          <AsideCard gridArea='1 / 1 / 2 / 2'>
            <AsideCardHeader></AsideCardHeader>
            <AsideCardContent></AsideCardContent>
          </AsideCard>
          <AsideCardSeparator>
            <AsideCard gridArea='1 / 2 / 1 / 3' height={'9'}>            
              <AsideCardContent></AsideCardContent>
            </AsideCard>
            <AsideCard gridArea='1 / 2 / 2 / 3' height={'9'}>            
              <AsideCardContent></AsideCardContent>
            </AsideCard>
          </AsideCardSeparator>
          <AsideCard gridArea='2 / 1 / 2 / 3'>
            <AsideCardHeader></AsideCardHeader>
            <AsideCardContent></AsideCardContent>
          </AsideCard>
          <AsideCard gridArea='1 / 1 / 2 / 2'>
            <AsideCardHeader></AsideCardHeader>
            <AsideCardContent></AsideCardContent>
          </AsideCard>
        </AsideContent>
      </Aside>
    </AsideContainer>

    <Container>
      <IconBar>
        <IconContent>

        </IconContent>
      </IconBar>
    </Container>
  </>  
}

export default memo(Widgets)
