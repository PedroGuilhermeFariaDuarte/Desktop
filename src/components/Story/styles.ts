import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
  max-height: 800px;
  padding: var(--primary-padding);
  border-radius: 10px;
  background: var(--six-background-gradient);
  overflow-y: auto;
  margin-top: 20px;
  margin-top: 20px;

  align-self: flex-end;  
`

export const Content = styled.div`
  width: 100%;
  height: auto;  

  display: flex;
  flex-flow: column;
  gap: 10px;
`
export const Header = styled.div`
  width: 100%;
  height: 15px;  
  margin-bottom: 20px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  h1 {
    font-family: var(--third-font-family);
    font-size: var(--primary-bodyTextMedium-size);
    font-weight: 400;
    color: var(--fourth-text-color);
  }
`

export const StoryCard = styled.div`
  width: 50%;
  min-height: 180px;
  height: auto;
  /* border:1px solid red; */
  margin-bottom: 10px;  

  display: flex;
  flex-flow: column;
`

export const StoryCardHeader = styled.div`
  width: 100%;
  height: auto;
  /* border:1px solid red; */

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 5px;

  span {
    font-family: var(--primary-font-family);
    font-size: var(--primary-bodyTextExtraSmall-size);
    font-weight: 400;
    color: var(--fourth-text-color);
  }
`

export const StoryImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--third-background-color);

  img {
    max-width: 100%;
  }
`
export const StoryCardContent = styled.div`
  width: 100%;
  height: auto;
  word-wrap: break-word;
  text-rendering: optimizeLegibility;
  text-align: justify;
  padding-left: 3px;    

  span {
    font-family: var(--primary-font-family);
    font-size: var(--primary-bodyTextSmall-size);
    font-weight: 600;
    color: var(--fourth-text-color);
  }
`
