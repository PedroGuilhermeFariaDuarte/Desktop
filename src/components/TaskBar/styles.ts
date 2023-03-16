import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 2.875rem;
    backdrop-filter: var(--primary-acrylic-level);
    background-color: var(--secondary-background-acrylic-color);
    box-shadow: var(--fourth-shadow);
    position: relative;
    z-index: 1000;
    display: flex;    
    flex-flow: row nowrap;    
    justify-content: center;    
    align-items: center;
`
export const ActionContent = styled.div`
    flex: 1;
    height: 100%;
    padding: var(--secondary-padding);
    background-color: red;
    
    display: flex;    
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
`
export const InfoContent = styled.div`
    min-width: 11%;
    width: auto;
    height: 52px;
    position: absolute;
    right: var(--primary-right-spacing);
    bottom: 3px;    
    display: flex;    
    flex-flow: row nowrap;    
    align-items: center;
    gap: 10px;

    &  svg {
      color: var(--fourth-text-color);
      margin-right: 10px;
      cursor: pointer;
    }

    & span {
      height: 100%;
      font-family: var(--secondary-font-family);
      font-size: var(--primary-bodyTextMedium-size);
      color: var(--fourth-text-color);
      cursor: pointer;
      padding-left: 8px;
      padding-right: 8px;

      display: flex;    
      flex-flow: column;    
      align-items: flex-end;    
      transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
  }
  
  & span:hover {
    background-color: var(--seventh-background-acrylic-color);
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
  }
`
export const IconTaskBar = styled.div`
    width: 50px;
    height: 100%;
    border-radius: 5px;    
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);

    display: flex;    
    flex-flow: row nowrap;    
    justify-content: center;    
    align-items: center;

    &:hover {
      box-shadow: var(--secondary-shadow);
      background-color: var(--seventh-background-acrylic-color);
      transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    }
`
export const WindowsLogo = styled.div`
  width: 80%;
  height: 80%;    
  transform: scale(1);    
  transition: 0.3s cubic-bezier(0.68,-0.55,0.27,1.55);

  display: flex;    
  flex-flow: row wrap;    
  justify-content: center;    
  align-content: center;

  & .quad {
    width: 15px;
    height: 15px;
    margin-bottom: 1px;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);

    & ~ .quad {
      margin-left: 1px;
    }
      
    &:nth-last-child(4) {
      border-top-left-radius: 2.4px;
      background: var(--for-background-color);
    }
  
    &:nth-last-child(3) {
      border-top-right-radius: 2.4px;
      background: var(--secondary-background-gradient);
    }
  
    &:nth-last-child(2) {
      margin-left: 0px;
      border-bottom-left-radius: 2.4px;
      background: var(--secondary-background-gradient);
    }
    
  
    &:nth-last-child(1) {
      border-bottom-right-radius: 2.4px;
      background: var(--third-background-gradient);
    }
  }

  &:active {    
    transform: scale(0.7);    
    transition: 0.3s cubic-bezier(0.68,-0.55,0.27,1.55);

    .quad {
      margin: 0.5px;
    } 
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
