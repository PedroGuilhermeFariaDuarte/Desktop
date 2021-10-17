import React, { memo } from 'react'

// Icons

// Types
import { IStory } from './types'

// Styles
import { Container, Content, StoryCard, Header, StoryCardHeader, StoryImage, StoryCardContent } from './styles'

const Story: React.FC<IStory> = () => (<Container>
  <Content>
    <Header>
      <h1>
        TOP STORIES
      </h1>
    </Header>
    <StoryCard>
      <StoryCardHeader>
        <StoryImage />
        <span>Business insider</span>
        <span> - </span>
        <span>
          2 hours
        </span>
      </StoryCardHeader>
      <StoryCardContent>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqu
        </span>
      </StoryCardContent>
    </StoryCard>
  </Content >

</Container >)

export default memo(Story)
