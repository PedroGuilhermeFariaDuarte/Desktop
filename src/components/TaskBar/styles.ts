import styled from 'styled-components'

export const Container = styled.nav`
    width: 100vw;
    height: 2.875rem;
    padding-left: 1rem;
    backdrop-filter: var(--primary-acrylic-level);
    background-color: var(--secondary-background-acrylic-color);
    box-shadow: var(--fourth-shadow);

    position: relative;
    z-index: 1000;

    display: flex;    
    flex-flow: row nowrap;    
    justify-content: space-between;    
    align-items: center;
`
export const Content = styled.div`    
    min-width: 50%;
    max-width: 100%;
    height: 100%;
    padding: 0.25rem;
    /* background-color: red; */
    
    display: flex;    
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
`
export const InfoContent = styled.div`
  flex: 1;    
  max-width: 15%;
  height: 100%;
  background-color: blue;
  
  display: flex;    
  flex-flow: row nowrap;    
  align-items: center;
  gap: 0.625rem;

  &  svg {
    color: var(--fourth-text-color);
    margin-right: 0.625rem;
    cursor: pointer;
  }

  & span {
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;

    font-family: var(--secondary-font-family);
    font-size: var(--primary-bodyTextMedium-size);
    color: var(--fourth-text-color);
    cursor: pointer;
    

    display: flex;    
    flex-flow: column;    
    align-items: flex-end;    
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
}

& span:hover {
  /* background-color: var(--secondary-background-acrylic-color); */
  transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
}
`

export const WindowsWidgets = styled.div`
  width: 66%;
  height: 66%;    
  transform: scale(1);    
  transition: 0.3s cubic-bezier(0.68,-0.55,0.27,1.55);  
  background-color: var(--cinco-background-color);
  padding: 3px 1px 3px 1px;
  border-radius: 2.3px;

  display: flex;    
  flex-flow: row nowrap;    
  justify-content: center;    
  align-content: center;

  & .bar {
    width: 10px;
    height: 100%;
    border-radius: 1.5px;    
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);

    & ~ .bar {
      margin-left: 1px;
    }  
  
    &:nth-last-child(2) {
      background-color: var(--primary-background-color);
    }
    
    &:nth-last-child(1) {      
      background: var(--forth-background-gradient);
    }
  }

  &:active {    
    transform: scale(0.7);    
    transition: 0.3s cubic-bezier(0.68,-0.55,0.27,1.55);

    .bar {
      margin: 0.5px;
    } 
  }
`
export const SearchIcon = styled.div`
  svg {
    font-size: 32px;
    color: #11100f;
    -webkit-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
`
