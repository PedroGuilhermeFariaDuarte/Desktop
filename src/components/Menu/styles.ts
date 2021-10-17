import styled from 'styled-components'

export const MenuContainer = styled.div`
    width: 40%;
    height: 800px;
    border-radius: 8px;    
    backdrop-filter: var(--primary-acrylic-level);
    background-color: var(--sixthly-background-acrylic-color);
    box-shadow: var(--secondary-shadow);
    padding: var(--third-padding);
    margin-bottom: var(--primary-padding);
    position: absolute;
    z-index: 0;
    bottom: 5px;
    left: 25%;
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    
    display: flex;    
    flex-flow: column;

    &.action-menu {
      bottom: -860px;
      transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    }
`
export const UserAppsContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 200px;
  padding: var(--for-padding);
  margin-bottom: var(--primary-padding);

  display: flex;  
  flex-flow: column;
`
export const UserAppsHeader = styled.div`
    width: 100%;
    height: 15px;
    margin-bottom: var(--secondary-bottom-spacing);
    color: var(--fourth-text-color);

    display: flex;    
    flex-flow: row nowrap;    
    justify-content: space-between;    
    align-items: center;
`
export const UserAppsTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: var(--primary-bodyTextMedium-size);
  font-weight: 900;
`
export const UserAppPin = styled.div`
    width: 80px;
    height: auto;
    border-radius: 4px;
    background-color: var(--seventh-background-acrylic-color);
    box-shadow: var(--secondary-shadow);
    padding: var(--secondary-padding);
    font-family: var(--secondary-font-family);
    font-size: var(--primary-bodyTextVerySmall-size);
    cursor: pointer;    
        
    display: flex;    
    flex-flow: row nowrap;    
    align-items: center;
    gap: 5px;

    & svg {
      font-size: 15px;
      color: var(--fourth-text-color);
    }
`
export const UserAppContent = styled.div`
    width: 100%;
    height: 15px;
    margin-bottom: var(--primary-padding);
    
    display: flex;    
    flex-flow: row wrap;    
    align-items: center;
`
export const IconTaskBarContainer = styled.div`
  width: 100%;
  height: 90px;  
  
  display: flex;    
  flex-flow: row wrap;
  align-items: center;
`
export const IconTaskBarContent = styled.div`
  min-width: 90.56px;
  width: auto;
  height: 100%;
  border-radius: 5px;
  -webkit-transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
  transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
  
  display: flex;  
  flex-flow: row nowrap;  
  justify-content: center;  
  align-items: center;

  &:hover {
    box-shadow: var(--secondary-shadow);
    background-color: var(--seventh-background-acrylic-color);
    -webkit-transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
    transition: 0.2s cubic-bezier(0.165,0.84,0.44,1);
  }
`
export const IconMenu = styled.div`
  width: auto;
  height: 60px;
  padding: var(--secondary-padding);
  font-family: var(--secondary-font-family);
  font-size: var(--primary-bodyTextVerySmall-size);
  color: var(--fourth-text-color);
  
  display: flex;  
  flex-flow: column;  
  align-items: center;

  & svg {
    font-size: 70px !important;
    margin-bottom: 10px;
    color: var(--fourth-text-color);
  }

`
export const UserActions = styled.div`
  width: 100%;
  height: 95px;
  background: var(--seventh-background-acrylic-color);
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: var(--for-padding);
  padding-right: var(--for-padding);
  
  display: flex;  
  flex-flow: row nowrap;  
  justify-content: space-between;  
  align-items: center;

  h1 {
    font-family: var(--third-font-family);
    font-size: var(--primary-title-size);
    font-weight: 900;
    background: var(--secondary-background-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  svg {
    color: var(--fourth-text-color);
  }
`
